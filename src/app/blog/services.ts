import fs from 'fs'
import { Articulo } from '@/shared/interfaces/Articulo';
import { formatDate } from '@/shared/handlers/formatDate'
import matter from 'gray-matter';
import path from 'path'

const blogDir = path.join(process.cwd(), 'src', 'app', 'blog', '(articles)')

export const getArticles = (): Articulo[] => { 
  const articles: Articulo[] = fs.readdirSync(blogDir).map(file => {

    const filePath = path.join(blogDir, file);
    const source = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(source);
    const { title, type , description, date} = matterResult.data;
    const content = matterResult.content
    
    const dateFormated = formatDate(date) 

    return {
      shortname: file,
      title,
      data: title,
      description,
      date: dateFormated,
      content
    }
  })
  return articles
}