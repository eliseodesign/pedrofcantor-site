import fs from 'fs'
import { Articulo } from '@/shared/interfaces/Articulo';
import { formatDate } from '@/shared/handlers/formatDate'
import matter from 'gray-matter';
import path from 'path'


const ARTICLES_PATH = 'src/app/blog/(articles)';
const POSTS_DIR = path.join(process.cwd(), ARTICLES_PATH);

export const getArticles = (): Articulo[] => { 
  const articles: Articulo[] = fs.readdirSync(POSTS_DIR).map(file => {

    const filePath = path.join(POSTS_DIR, file);
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