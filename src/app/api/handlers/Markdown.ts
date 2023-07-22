import path from 'path'
import { writeFileSync} from 'fs'
import { Articulo } from '@/shared/interfaces'
import { formatDate } from '@/shared/handlers/formatDate'

export function createMarkdownFile(article: Articulo, filename: string) {
  const filePath = path.join(process.cwd(), 'src', 'app', 'blog', '(articles)', filename);
  const markdownContent = `---
title: ${article.title}
description: ${article.description}
date: ${article.date}
---
> ${formatDate(article.date)}
${article.content}
  `;

  writeFileSync(filePath, markdownContent);
  console.log(`Archivo Markdown creado en: ${filePath}`);
}