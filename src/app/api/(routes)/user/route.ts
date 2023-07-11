import { handleError, ResponseProvider } from '@/app/api/handlers'
import { createUser, deleteUser } from '@/app/api/schemas'
import { UserService } from '../../services/userService'

const service = new UserService()
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
    return handleError(error)
  }
}

export async function GET(req:Request){
  try{
    const users = await service.getAll()
    const { data, message, success } = users

    if(!success) throw new Error()

    return ResponseProvider(200, message, data)
  }catch(error){
    return handleError(error)
  }
}