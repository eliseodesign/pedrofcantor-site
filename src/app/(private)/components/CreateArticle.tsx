import { FormDetail, MarkdownEditor } from './'
import { useObjectState } from '@/shared/hooks/useObjetState'

interface Detail {
  shortname: string
  title: string
  description: string
  content: string
  image: any
}

function CreateArticle() {
  const initialDetail: Detail = {
    shortname: '',
    title: '',
    description: '',
    content: '# prueba',
    image: undefined
  }

  const [detail, setDetail] = useObjectState<Detail>(initialDetail)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'imageArticle') {
      // Almacenar el archivo seleccionado en el estado
      const selectedFile = event.target.files?.[0];
      console.log('FILE', selectedFile)

      if (selectedFile && selectedFile instanceof File && isImageFile(selectedFile)) {
        // Comprobar que selectedFile es una instancia de File y es una imagen
        setDetail((prevState) => ({
          ...prevState,
          data: {
            ...prevState.data,
            image: selectedFile
          }
        }));
      } else {
        // todo: mostrar al usuario
        console.log('no es un imagen')
      }
      return
    } 
    setDetail((prevState) => ({
      ...prevState,
      data:{
        ...prevState.data,
        [event.target.name]: event.target.value,
      }
    }));
      
    };

  const isImageFile = (file: File): boolean => {
    return file.type.startsWith('image/');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Crear un objeto FormData y agregar los datos necesarios
    const formData = new FormData();
    formData.append('shortname', detail.data.shortname);
    formData.append('title', detail.data.title);
    formData.append('description', detail.data.description);
    formData.append('content', detail.data.content);
    formData.append('imageArticle', detail.data.image as unknown as File); // Agregar el archivo al FormData

    try {
      // Enviar los datos al servidor utilizando fetch y FormData
      const result = await fetch('api/articulo', {
        method: 'POST',
        body: formData,
      });
      const response = await result.json();
      console.log(response);
    } catch (error) {
      // todo: mostrar a usuario
      console.error('Error al enviar el formulario', error);
    }
  };

  const handleContent = ({ text }: { text: string }) => {
    setDetail((prevState)=> ({
      ...prevState,
      data:{
        ...prevState.data,
        content:text
      }
    }))
  }
  return (
    <div>
      <FormDetail 
        shortname={detail.data.shortname}
        title={detail.data.title}
        description={detail.data.description}
        image={detail.data.image}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <MarkdownEditor handleContent={handleContent}/>
    </div>
  )
}

export default CreateArticle