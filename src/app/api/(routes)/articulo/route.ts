import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { createArticulo } from '@/app/api/schemas'
import { ArticuloService } from '@/app/api/services/articuloService'
import { handleError, ResponseProvider } from '@/app/api/handlers'
 
const service = new ArticuloService()

export async function POST(req:Request, res:Response) {
  try {
    const reqData = await req.formData()

    const imageFile = reqData?.get('imageArticle');

    if (!imageFile || !(imageFile instanceof Blob))  return ResponseProvider(400, 'Imagen invalida', null)
    
  
    // Verificar si el archivo es una imagen antes de guardarla
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif']; // Agrega más tipos MIME si lo deseas
  
    if (!validImageTypes.includes(imageFile.type)) {
      return NextResponse.json({ error: 'El archivo proporcionado no es una imagen válida.' }, { status: 400 });
    }

    const urlImage = String(reqData?.get('shortname') + '.' +  imageFile.name.split('.').slice(-1)[0]);
    const articulo = {
      shortname: String(reqData?.get('shortname')),
      title: String(reqData?.get('title')),
      description: String(reqData?.get('description')),
      content: String(reqData?.get('content')),
      urlImage
    }

    console.log(articulo)
    
    createArticulo.parse(articulo)
    
    const result = await service.create(articulo)
    const { data, message, success } = result

    if(!success) return ResponseProvider(400, message, null); 

    const filePath = path.join(process.cwd(), 'public', articulo.urlImage);
    fs.writeFileSync(filePath, imageBuffer);
    return ResponseProvider(201, message, data)

  } catch (error) {
    return handleError(error)
  }
}