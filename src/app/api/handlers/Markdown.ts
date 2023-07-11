import path from 'path'
import { writeFileSync} from 'fs'
import { Articulo } from '@/shared/interfaces'

export function createMarkdownFile(article: Articulo, filename: string) {
  const filePath = path.join(process.cwd(), 'src', 'pages', 'blog', filename);
  const markdownContent = `---
title: ${article.title}
description: ${article.description}
fecha: ${article.date}
---
> ${article.date}
${article.content}
  `;

  writeFileSync(filePath, markdownContent);
  console.log(`Archivo Markdown creado en: ${filePath}`);
}