import { useState } from 'react'

import BurgerMenu from './BoorgerMenu'
import logoPath from '../assets/icons/Logo.png'
import searchPath from '../assets/icons/search.svg'
import heartPath from '../assets/icons/heart.svg'
import bagPath from '../assets/icons/bag.svg'

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = () => {
    setMenuIsOpen(true)
    document.body.classList.add('menu-open')
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
    document.body.classList.remove('menu-open')
  }

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-top__content">
              <div className="header-top__contacts">
                <ul className="header-top__contacts-list">
                  <li>
                    <a href="#">098 900 09 09</a>
                  </li>
                  <li>
                    <a href="#">Допомога</a>
                  </li>
                </ul>
              </div>
              <div className="header-top__auth">
                <span className="header-top__auth-login">Увійти</span> /{' '}
                <span className="header-top__auth-sing-up">Зареєструватися</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom__content">
              <div className="header-bottom__logo">
                <img src={logoPath} alt="Logo" />
              </div>
              <nav className="header-bottom__nav">
                <ul className="header-bottom__nav-list">
                  <li>
                    <a href="#">новинки</a>
                  </li>
                  <li>
                    <a href="#">чоловіки</a>
                  </li>
                  <li>
                    <a href="#">жінки</a>
                  </li>
                  <li>
                    <a href="#">аксесуари</a>
                  </li>
                  <li>
                    <a href="#">акції</a>
                  </li>
                </ul>
              </nav>
              <div className="header-bottom__right-nav">
                <div className="burger-btn" onClick={openMenu}>
                  <span className="burger-btn__tt"></span>
                  <span className="burger-btn__mm"></span>
                  <span className="burger-btn__bb"></span>
                </div>
                <form className="header-bottom__form">
                  <img src={searchPath} alt="search" />
                  <input className="header-bottom__input" type="text" />
                </form>
                <img src={heartPath} alt="heart" />
                <img src={bagPath} alt="heart" />
              </div>
            </div>
          </div>
        </div>
        <BurgerMenu menuIsOpen={menuIsOpen} closeMenu={closeMenu} />
      </header>
    </>
  )
}

export default Header
