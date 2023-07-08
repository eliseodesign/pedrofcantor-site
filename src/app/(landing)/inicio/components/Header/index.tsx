import './scss/index.scss'
import Image from 'next/image'
function Header() {
  return (
    <header>
      <section className='general'>
        <div className="cajon__center">
          <section className="textos-header">
            <p>COMPLEJO EDUCATIVO</p>
            <h1>PEDRO F. CANTOR</h1>
          </section>
          
          <section className="logo">
            {/* <img id="logoCantor" className="enmenu logo" src="/img/logo.png" alt="logo cantor"/> */}
            <Image 
              id="logoCantor" 
              width={200}
              height={200}
              className="enmenu logo" src="/img/logo.png" 
              alt="logo cantor"
              priority={true}
              />
          </section>
        </div>
      </section>
    </header>
  )
}

export default Header