import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
  if(request.nextUrl.pathname === "/"){
    return NextResponse.redirect(new URL('/inicio', request.url))
  }
  if(request.nextUrl.pathname === "/super-admin"){
    // TODO: validar que es super-administrador
    return NextResponse.redirect(new URL('/inicio', request.url))
  }
  return;
}