import { VerifySuperAdmin, ResponseProvider } from '../handlers'

import { Admin } from './admin'
import { AdminService } from './adminService'
import { AdminQueries } from '@/database/queries/admin'

const service = new AdminService(new AdminQueries());

// POST
export async function POST(req:Request, res:Response) {
  try {
    const data = await req.json()
    const admin: Admin = data.admin
    console.log(admin)
    const superAdmin: Admin = data.superAdmin

    if(VerifySuperAdmin(superAdmin) === false){
      // return NextResponse.json({error:"Inautorizado"})
      return ResponseProvider(401, "Inautorizado", null)
    }
    
    service.create(admin)

    // return NextResponse.json({ success: `admin` })
    return ResponseProvider<Admin>(200, "Admin Create", admin)
  } catch (error) {
    // return NextResponse.json({error})
    return ResponseProvider(400, String(error), null)

  }
}

export async function DELETE(req:Request, res:Response) {
  try {
    const data = await req.json()
    const id: number = data.id
    const superAdmin: Admin = data.superAdmin

    if(VerifySuperAdmin(superAdmin) === false){
      // return NextResponse.json({error:"Inautorizado"})
      return ResponseProvider(401, "Inautorizado", null)
    }
    
    const result = await service.delete(id)

    if(!result){
      // return NextResponse.json({ success: `admin` })
      return ResponseProvider(205, "Admin don't exist", null)
    }
      return ResponseProvider(200, "Admin deleted", null)
  } catch (error) {
    return ResponseProvider(400, String(error), null)
  }
}