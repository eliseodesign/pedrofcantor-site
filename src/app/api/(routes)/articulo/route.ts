import { NextResponse } from 'next/server'
import { Article } from '@/shared/interfaces'
import { createMarkdownFile} from '@/app/api/handlers/Markdown'
 
export async function POST(req:Request, res:Response) {
  try {
    
    const dataJson:Article = await req.json()
    console.log(dataJson.shortName)
    
    createMarkdownFile(dataJson, `${dataJson.shortName}.md`)
    return NextResponse.json({ success: `articulo '${dataJson.shortName}'` })
  } catch (error) {
    return NextResponse.json({error})
  }
}