import MarkdownIt from 'markdown-it';
import { prisma } from '@/lib/prisma';
import '../markdown.css'

const Blog = async ({ params }: { params: { slug: string } }) => {
  const articulo = await prisma.articulo.findUnique({ where: { shortname: params.slug } });  //select * from

  let html: string | TrustedHTML | undefined;
  if (articulo) {
    const md = new MarkdownIt();
    html = md.render(articulo.content); // convertir md a html
  }

  return (
    <div className='markdown-container'>
      {html !== undefined ? <main dangerouslySetInnerHTML={{ __html: html }} /> : null}
    </div>
  );
};

export default Blog;
