'use client'
import { Luxurious_Script } from 'next/font/google'
const luxurious = Luxurious_Script({ weight: '400', subsets: ['latin', 'latin-ext', 'vietnamese'] })

import Links from './Links';
import { useState } from 'react';
import './scss/index.scss';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav__container">
          <p className={`nav__logo ${luxurious.className}`}>Leones</p>

          <div className={`nav__img ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
            <div className="linea-1"></div>
            <div className="linea-2"></div>
            <div className="linea-3"></div>
          </div>

          <div className={`nav__menu ${isMenuOpen ? 'despliege' : ''}`}>
            {
              // Temporalmente desactivado
              /* <div className="cbdark">
                <button className="bdark" id="bdark" />
              </div> */
            }
            <Links />
          </div>
        </div>


      </nav>
      <div
        className={`modal_menu ${isMenuOpen ? 'display-block' : ''}`}
        onClick={closeMenu}
      >
      </div>
    </>
  );
}

export default NavBar;
