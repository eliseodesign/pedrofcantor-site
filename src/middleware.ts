import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
  if(req.nextUrl.pathname === "/"){
    return NextResponse.redirect(new URL('/inicio', req.url))
  }
  if(req.nextUrl.pathname === "/admin"){
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET})
    // console.log("TOKEN",session)
    if(!session){

      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
  }
  return;
}