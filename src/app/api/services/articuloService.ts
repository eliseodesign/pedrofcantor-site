import { prisma } from '@/lib/prisma'
import z from 'zod'
import { Articulo } from '@/shared/interfaces'
import { ReturnService, returnProvider } from '@/app/api/handlers'
import { createArticulo} from '@/app/api/schemas'
import { createMarkdownFile} from '@/app/api/handlers/Markdown'


export class ArticuloService {
  async create(data: z.infer<typeof createArticulo>): Promise<ReturnService<Articulo | null>>{
    
    const exist = await prisma.articulo.findUnique({ where: { shortname: data.shortname }})

    if(exist) return returnProvider(null, 'Ya existe', false)
    console.log('DATA',data)

    const articulo = await prisma.articulo.create({ data })
    if(!articulo) return returnProvider(null, 'Error del servidor', false)

    // createMarkdownFile(articulo, `${data.shortname}.md`)
    return returnProvider(articulo, `Articulo ${data.shortname} creado`, true)
  }
}