import { UserType } from '@/app/api/schemas'
import { prisma } from '@/lib/prisma'
import { ReturnService, returnProvider } from '@/app/api/handlers'
import { User } from '@/shared/interfaces'

export class UserService {

  /**create user recibe al user(data) y el rol*/
  async create(data:UserType, rol: string): Promise<ReturnService<User | null>>{
    
    const queryRol = await prisma.role.findUnique({ where:{ name: rol } })
    if(!queryRol) return returnProvider(null,'No existe', false)
    
    const queryUsername = await prisma.user.findUnique({ where: { username: data.username } })

    if(queryUsername) return returnProvider(null, 'Ya existe', false)
    
    data.roleId = queryRol.id
    const user = await prisma.user.create({ data })

    return returnProvider(user, 'usuario creado', true)
  }

  async delete(id: number) {
    const user = await prisma.user.findUnique({ where: { id: id }, include: { role: true }})
    if(!user) return returnProvider(null, 'No existe usuario', false)
    if(user.role.name === 'super-admin') return returnProvider(null, 'No puedes eliminar este usuario', false)

    const deleted = await prisma.user.delete({ where: { id }})
    
    return returnProvider(deleted, 'usuario eliminano', true)
  }
  
  async getAll(){
    const users = await prisma.user.findMany({ include: { role: true }})

    const admins = users.filter( user => user.role.name === 'admin' )
    return returnProvider(admins, 'usuarios', true)
  }
}