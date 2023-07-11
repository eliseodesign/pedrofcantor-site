import { NextResponse } from 'next/server'
import { createArticulo } from '@/app/api/schemas'
import { ArticuloService } from '@/app/api/services/articuloService'
import { handleError, ResponseProvider } from '@/app/api/handlers'
 
const service = new ArticuloService()

export async function POST(req:Request, res:Response) {
  try {
    const requestData = await req.json()
    createArticulo.parse(requestData)
    
    const result = await service.create(requestData)
    const { data, message, success } = result

    if(!success) return ResponseProvider(400, message, null); 
    return ResponseProvider(201, message, data)

  } catch (error) {
    return handleError(error)
  }
}