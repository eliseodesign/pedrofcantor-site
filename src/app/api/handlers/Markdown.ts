import path from 'path'
import { writeFileSync} from 'fs'
import { Article } from '@/shared/interfaces'

export function createMarkdownFile(article: Article, filename: string) {
  const filePath = path.join(process.cwd(), 'src', 'pages', 'blog', filename);
  const markdownContent = `---
title: ${article.metaData.title}
description: ${article.metaData.description}
fecha: ${article.metaData.fecha}
---
> ${article.metaData.fecha}
${article.content}
  `;

  writeFileSync(filePath, markdownContent);
  console.log(`Archivo Markdown creado en: ${filePath}`);
}