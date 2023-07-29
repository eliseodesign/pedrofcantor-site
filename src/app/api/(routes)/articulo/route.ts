import { createArticulo } from '@/app/api/schemas';
import { ArticuloService } from '@/app/api/services/articuloService';
import { handleError, ResponseProvider } from '@/app/api/handlers';
import cloudinary from 'cloudinary';

// Configura la conexión con Cloudinary (debes tener tus propias credenciales)
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
          
const service = new ArticuloService();

export async function POST(req: Request, res: Response) {
  try {
    const reqData = await req.formData();

    const imageFile = reqData?.get('imageArticle'); // obtener la imagen

    // validar que exista y sea blob
    if (!imageFile || !(imageFile instanceof Blob)) return ResponseProvider(400, 'Imagen invalida', null);

    // Verificar si el archivo es una imagen antes de guardarla
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jfif', 'image/webp'];
    if (!validImageTypes.includes(imageFile.type)) {
      return ResponseProvider(400, 'El archivo proporcionado no es una imagen válida.', null);
    }

    // url de la imagen para guardarla y para el articulo en la bd
    const urlImage = String(reqData?.get('shortname') + '.' + imageFile.name.split('.').slice(-1)[0]);
    const articulo = {
      shortname: String(reqData?.get('shortname')),
      title: String(reqData?.get('title')),
      description: String(reqData?.get('description')),
      content: String(reqData?.get('content')),
      urlImage,
    };

    createArticulo.parse(articulo); // verificar tipos

    const result = await service.create(articulo); // crear articulo
    const { data, message, success } = result;

    if (!success) return ResponseProvider(400, message, null);

    // Cargar la imagen en Cloudinary
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    cloudinary.v2.uploader
      .upload_stream({ resource_type: 'image', public_id: urlImage }, (error, result) => {
        if (error) {
          console.error('Error al cargar la imagen en Cloudinary:', error);
          return ResponseProvider(500, 'Error al cargar la imagen en Cloudinary', null);
        }
        console.log('Imagen cargada en Cloudinary:', result);
      })
      .end(imageBuffer);

    return ResponseProvider(201, message, data);
  } catch (error) {
    return handleError(error);
  }
}
