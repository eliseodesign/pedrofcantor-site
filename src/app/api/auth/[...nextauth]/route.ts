import NextAuth from 'next-auth'
import CredencialProvider from 'next-auth/providers/credentials'
import { AdminQueries } from '@/database/queries/admin'

const adminQueries = new AdminQueries()
const handler = NextAuth({
  providers:[
    CredencialProvider({
      name:'credentials',
      credentials:{
        username: {label: 'username', type: 'text', placeholder:'Usuario'},
        password: {label: 'password', type: 'password', placeholder:'Contraseña'}
      },
      async authorize(credentials, req){

        if(credentials === undefined) throw new Error('Credenciales no proporcionadas')

        const admin:any = await adminQueries.selectOne(String(credentials.username)) 

        if(
          admin === undefined ||
          admin.password !== credentials.password
          ) throw new Error('Credenciales invalidas')
        

        return admin
      },
    })
  ],
  callbacks:{
    jwt({token, user}){
      if(user) token.user = user
      return token
    },
    session({session, token}){
      session.user = token.user as any
      return session
    }
  },
  pages:{
    // signIn: '/login',
  }
})

export { handler as GET, handler as POST }

