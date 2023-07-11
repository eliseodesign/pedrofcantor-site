import { ZodError } from 'zod'
import { ResponseProvider } from './ResponseProvider'

export function handleError(error: unknown) {
  if (error instanceof ZodError) {
    const validationErrors = error.issues.map((issue) => issue.message);
    return ResponseProvider(400, 'Error de validación', validationErrors);
  }else if(error instanceof Error){
    return ResponseProvider(500, String(error), null);
  } else{
    return ResponseProvider(500, 'Error desconocido', null)
  }
}