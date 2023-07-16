import { FormDetail, MarkdownEditor } from './'
import { useObjectState } from '@/shared/hooks/useObjetState'

interface Detail {
  shortname: string
  title: string
  description: string
  content: string
}

function CreateArticle() {
  const initialDetail: Detail = {
    shortname: '',
    title: '',
    description: '',
    content: '# prueba'
  }

  const [detail, setDetail] = useObjectState<Detail>(initialDetail)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetail((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(detail.data)
    const form = new FormData()
    form.set('detail', JSON.stringify(detail.data));

    const result = await fetch('api/articulo', {
      method: 'POST',
      body: JSON.stringify(detail.data)
    })
    const response = await result.json()
    console.log(response)
  }

  const handleContent = ({ text }: { text: string }) => {
    console.log(detail.data.content)
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
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <MarkdownEditor handleContent={handleContent}/>
    </div>
  )
}

export default CreateArticle