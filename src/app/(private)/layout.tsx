import SessionProvider from './Provider'
interface Props {
  children: React.ReactNode
}


function RootLayout({children}: Props) {
  return (
    <section>
      <h1>Panel</h1>
      <SessionProvider>
        {children}
      </SessionProvider>
    </section>
  )
}

export default RootLayout;