import SessionProvider from './Provider'
interface Props {
  children: React.ReactNode
}


function PrivateLayout({children}: Props) {
  return (
    <section>
      <h1 className='px-4 pt-4 text-xl text-primary'>Panel De Administración</h1>
      <SessionProvider>
        {children}
      </SessionProvider>
    </section>
  )
}

export default PrivateLayout;