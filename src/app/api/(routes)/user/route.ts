import { ResponseProvider } from '../handlers'

// POST
export async function POST(req:Request, res:Response) {
  try {
  //  TODO: create admi
  } catch (error) {
    // return NextResponse.json({error})
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