import { FormDetail, MarkdownEditor } from './'
import toast, { Toaster } from 'react-hot-toast'

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
    if (event.target.name === 'shortname') {
      let value = event.target.value.replace(/ /g, '-').replace(/\./g, '')
      setDetail((prevState) => ({
        ...prevState,
        data: {
          ...prevState.data,
          shortname: value
        }
      }));
    } else {
      setDetail((prevState) => ({
        ...prevState,
        data: {
          ...prevState.data,
          [event.target.name]: event.target.value,
        }
      }));

    };
  }

  const isImageFile = (file: File): boolean => {
    return file.type.startsWith('image/');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const { content, description, image, shortname, title } = detail.data
      if (shortname === '' || title === '' || description === '' || content === '') {
        toast.error('Debe llenar todos los campos')
        return
      }
    
      if (shortname.length < 5 || !/^[a-zA-Z0-9-]+$/.test(shortname)) {
        toast.error('URL muy corta o con caracteres invalidos')
        return
      }
    

      // Crear un objeto FormData y agregar los datos necesarios
      const formData = new FormData();
      formData.append('shortname', shortname);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('content', content);
      formData.append('imageArticle', image as unknown as File); // Agregar el archivo al FormData

      // Enviar los datos al servidor utilizando fetch y FormData
      const result = await fetch('api/articulo', {
        method: 'POST',
        body: formData,
      });
      const response = await result.json();
      if(response.code !== 201){
        toast.error(response.msg)
      }
    } catch (error) {
      // todo: mostrar a usuario
      console.error('Error al enviar el formulario', error);
    }
  };

  const handleContent = ({ text }: { text: string }) => {
    setDetail((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        content: text
      }
    }))
  }
  return (
    <div>
      <FormDetail
        shortname={detail.data.shortname}
        title={detail.data.title}
        description={detail.data.description}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <MarkdownEditor handleContent={handleContent} />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
    </div>
  )
}

export default CreateArticle