import { ResponseProvider } from '@/app/api/handlers'
import { createUser } from '@/app/api/schemas'
import { AdminService } from '../../services/userService'
import { ZodError } from 'zod'

const service = new AdminService()
// POST
export async function POST(req: Request) {
  try {
    const requestData = await req.json(); //parsear a json
    createUser.parse(requestData); // validation

    const result = await service.create(requestData, 'admin'); // crear
    const { data, message, success } = result
    
    if (!success) return ResponseProvider(400, message, null); 
  
    return ResponseProvider(201, message, data);
  } catch (error) {
    if (error instanceof ZodError) { //manejar si es un error de tipos
      const validationErrors = error.issues.map((issue) => issue.message);
      return ResponseProvider(400, "Error de validación", validationErrors);
    }

    return ResponseProvider(500, String(error), null);
  }
}


export async function DELETE(req:Request, res:Response) {
  try {
    // TODO: delete admin
  } catch (error) {
    return ResponseProvider(400, String(error), null)
  }
}