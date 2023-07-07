import { NextResponse } from 'next/server'

export function ResponseProvider<T = null>(status: number, msg: string, data:T){
  return NextResponse.json({
    code:status,
    msg,
    data
  })
}