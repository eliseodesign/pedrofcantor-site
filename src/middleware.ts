import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { ResponseProvider } from '@/app/api/handlers'
import type { NextRequest } from 'next/server'

interface Role {
  id: number,
  name: string,
  isActive: boolean,
  createdAt: string
}

export const middleware = async (req: NextRequest) => {
   // redirect page inicio
  if(req.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/inicio', req.url))
  
  // verify admin
  if(req.nextUrl.pathname === '/admin'){
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
    // si no existe el token redireccionar al login
    if(!session) return NextResponse.redirect(new URL('/api/auth/signin', req.url));

    const { role } = session?.user as { role: Role }
    const { name: roleName } = role

    // si existe pero no se admin ni super-admin igual redireccionar
    if( roleName !== 'admin' && roleName !== 'super-admin' ) {
      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
    // si es super admin mostrarle vista super-admi
    if(roleName === 'super-admin'){
      return NextResponse.rewrite(new URL('/super-admin', req.url));
    }
  }

  // VALIDACIÓN DE ENDPOINTS
  if(req.nextUrl.pathname === '/api/articulo'){
    try{
      const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
      const { role } = session?.user as { role: Role }
      const { name: roleName } = role
      if( roleName !== 'admin' && roleName !== 'super-admin' ) {
        throw new Error('No esta autorizado')
      }
    } catch(error){
      return ResponseProvider(401, String(error), null)
    }
    
  }
  return;
}