import { getArticles } from './services'

const Blog = () => {
  const articulos = getArticles()
  return (
    <div>
      {
        JSON.stringify(articulos)
      }
    </div>
  )
}

export default Blog