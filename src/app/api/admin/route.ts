import { NextResponse } from 'next/server'
import { User} from '@/shared/interfaces'
import { VerifySuperAdmin } from '../handlers'

export async function POST(req:Request, res:Response) {
  try {
    // const user:User = await req.json()
    const data = await req.json()
    const admin: User = data.admin
    const superAdmin: User = data.superAdmin

    if(VerifySuperAdmin(superAdmin) === false){
      return NextResponse.json({error:"Inautorizado"})
    }
    
    return NextResponse.json({ success: `admin` })
  } catch (error) {
    return NextResponse.json({error})
  }
}