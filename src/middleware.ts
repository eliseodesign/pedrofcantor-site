import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface Role {
  id: number,
  name: string,
  isActive: boolean,
  createdAt: string
}

export const middleware = async (req: NextRequest) => {
  if(req.nextUrl.pathname === '/'){
    return NextResponse.redirect(new URL('/inicio', req.url))
  }
  if(req.nextUrl.pathname === '/admin'){
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET})

    if(!session) return NextResponse.redirect(new URL('/api/auth/signin', req.url));

    const { role } = session?.user as { role: Role }
    const { name: roleName } = role

    if( roleName !== 'admin' && roleName !== 'super-admin' ) {
      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
    
  }
  return;
}