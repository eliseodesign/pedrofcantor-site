import React from 'react'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

const Blog = async () => {
  const articulos = await prisma.articulo.findMany()
  console.log(articulos)
  return (
    <div className='max-w-xl mx-auto pt-2'>
      <h1 className='text-3xl text-primary'>Cantor Blog</h1>
      {
        articulos.map( articulo => (
          <Link key={articulo.id} href={`blog/${articulo.shortname}`} className='hover:scale-50'>
            <h2 className='text-2xl'>{articulo.title}</h2>
            <p className='text-gray-800'>{articulo.description}</p>
          </Link>
        ))
      }
    </div>
  )
}

export default Blog