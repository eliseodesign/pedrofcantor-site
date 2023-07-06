import { User } from '@/shared/interfaces'
import { config } from '@/../config/config'

export function VerifySuperAdmin(credenciales:User):boolean{
  const { password, username } = config.superAdmin

  if(password === credenciales.password && username === credenciales.username){
    return true;
  }
  return false;
}