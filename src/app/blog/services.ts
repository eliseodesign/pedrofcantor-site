import fs from 'fs';
import { Articulo } from '@/shared/interfaces/Articulo';
import { formatDate } from '@/shared/handlers/formatDate';
import matter from 'gray-matter';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ARTICLES_PATH = '(articles)'; // Ruta relativa a la ubicación del archivo actual

export const getArticles = (): Articulo[] => {
  const currentFileURL = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileURL);
  const currentFileDir = join(currentFilePath, '..');
  const POSTS_DIR = join(currentFileDir, ARTICLES_PATH);

  const articles: Articulo[] = fs.readdirSync(POSTS_DIR).map(getArticleData);
  return articles;
};

const getArticleData = (file: string): Articulo => {
  const currentFileURL = import.meta.url;
  const currentFilePath = fileURLToPath(currentFileURL);
  const currentFileDir = join(currentFilePath, '..');
  const POSTS_DIR = join(currentFileDir, ARTICLES_PATH);

  const filePath = join(POSTS_DIR, file);
  const source = fs.readFileSync(filePath, 'utf-8');
  const matterResult = matter(source);
  const { title, type, description, date } = matterResult.data;
  const content = matterResult.content;
  const dateFormated = formatDate(date);

  return {
    shortname: file,
    title,
    description,
    date: dateFormated,
    content,
  };
};
