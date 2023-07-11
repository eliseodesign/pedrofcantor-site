import { prisma } from '@/lib/prisma'
import { Articulo } from '@/shared/interfaces'
import { ReturnService, returnProvider } from '@/app/api/handlers'
import { ArticuloType } from '@/app/api/schemas'
import { createMarkdownFile} from '@/app/api/handlers/Markdown'


export class ArticuloService {
  async create(data: ArticuloType): Promise<ReturnService<Articulo | null>>{
    const exist = await prisma.articulo.findUnique({ where: { shortname: data.shortname }})

    if(exist) return returnProvider(null, 'Ya existe', false)
    console.log("DATA",data)

    const articulo = await prisma.articulo.create({ data })
    if(!articulo) return returnProvider(null, 'Error del servidor', false)

    createMarkdownFile(articulo, `${data.shortname}.md`)
    return returnProvider(articulo, `Articulo ${data.shortname} creado`, true)
  }
}