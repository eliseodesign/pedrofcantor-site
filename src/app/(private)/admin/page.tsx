'use client'

import { useSession } from 'next-auth/react'

function Admin() {
  const { data: session, status} = useSession()
  
  console.log(session, status)
  return (
    <div>Admin</div>
  )
}

export default Admin