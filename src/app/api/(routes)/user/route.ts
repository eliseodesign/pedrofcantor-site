import { ResponseProvider } from '@/app/api/handlers'
import { createUser } from '@/app/api/schemas'
import { ZodError } from 'zod'

// POST
export async function POST(req:Request, res:Response) {
  try {
  const data = await req.json()
  const result = createUser.parse(data)
  console.log(result)
  return ResponseProvider(201,"Todo bien", null)

  } catch (error) {
    // return NextResponse.json({error})
    if(error instanceof ZodError){
      return ResponseProvider(400, "Type Error", error.issues)
    }
    return ResponseProvider(400, String(error), null)

  }
}

export async function DELETE(req:Request, res:Response) {
  try {
    // TODO: delete admin
  } catch (error) {
    return ResponseProvider(400, String(error), null)
  }
}