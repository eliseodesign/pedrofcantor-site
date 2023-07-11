import { handleError, ResponseProvider } from '@/app/api/handlers'
import { deleteUser, updateUser, getUser} from '@/app/api/schemas'
import { UserService } from '@/app/api/services/userService'

const service = new UserService()
// DELETE
export async function DELETE(req: Request,
  { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    deleteUser.parse({id})

    const result = await service.delete(id)
    const { data, message, success } = result
    
    if (!success) return ResponseProvider(400, message, null); 
  
    return ResponseProvider(201, message, data);    
  } catch (error) {
    return handleError(error)
  }
}

export async function PATCH(req: Request,
  { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const requestData = await req.json()
    getUser.parse({ id })
    updateUser.parse(requestData)

    const update = {...requestData, id}
    const result = await service.update(update)
    const { data, message, success } = result
    
    if (!success) return ResponseProvider(400, message, null); 
  
    return ResponseProvider(201, message, data);    
  } catch (error) {
    return handleError(error)
  }
}