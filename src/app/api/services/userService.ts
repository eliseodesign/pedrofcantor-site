import { UserType } from '@/app/api/schemas'
import { prisma } from '@/lib/prisma'
import { RetunService, User } from '@/shared/interfaces'

export class AdminService {

  /**create user recibe al user(data) y el */
  async create(data:UserType, rol: string): Promise<RetunService<User | null>>{
    const queryRol = await prisma.role.findUnique({
      where:{ name: rol}
    })

    if(!queryRol){
      return Promise.resolve({
        data:null,
        message: 'No existe rol',
        success: false
      })
    }

    data.id = queryRol.id
    const user = await prisma.user.create({
      data
    })

    return Promise.resolve({
      data : user,
      message: 'usuario creado con exito',
      success: true
    })
  }

  async delete(id: number) {

  }
  
  async getAll(){

  }
}