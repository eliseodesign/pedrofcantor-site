import NextAuth from "next-auth"
import CredencialProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers:[
    CredencialProvider({
      name:"credentials",
      credentials:{
        username: {label: "username", type: "text", placeholder:"Usuario"},
        password: {label: "password", type: "password", placeholder:"Contraseña"}
      },
      async authorize(credentials, req){
        const user = {
          id: "1",
          userame:"userfalse",
          passwor:"passwordfalse"
        }
        return user
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
  }
})

export { handler as GET, handler as POST }
