import { NextResponse } from 'next/server'
import { VerifySuperAdmin } from '../handlers'

import { Admin } from './admin'
import { AdminService } from './adminService'
import { AdminQueries } from '@/database/queries/admin'

const service = new AdminService(new AdminQueries());

// POST
export async function POST(req:Request, res:Response) {
  try {
    const data = await req.json()
    const admin: Admin = data.admin
    const superAdmin: Admin = data.superAdmin

    if(VerifySuperAdmin(superAdmin) === false){
      return NextResponse.json({error:"Inautorizado"})
    }
    
    service.create(admin)

    return NextResponse.json({ success: `admin` })
  } catch (error) {
    return NextResponse.json({error})
  }
}