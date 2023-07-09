import { AdminQueries } from '@/database/queries/admin'

async function SuperAdmin() {
  const db = new AdminQueries()
  const admins = await db.selectAll()
  return (
    <div>
      {
        admins.map( admin => {
          return (
            <div key={admin.username}>
              <h1>{admin.username}</h1>
              <p>{admin.enable ? "cuenta activa":"cuenta desactiva"}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SuperAdmin