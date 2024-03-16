import PropTypes from 'prop-types'

import LogoPath from '../assets/icons/Logo.png'
import { useEffect, useRef } from 'react'

function BurgerMenu({ closeMenu, menuIsOpen }) {
  const burgerMenuRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (!burgerMenuRef.current?.contains(e.target)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <>
      <aside className={`burger-menu ${menuIsOpen ? 'active' : ''}`} ref={burgerMenuRef}>
        <header className="burger-menu__header">
          <div className="burger-menu__logo">
            <a href="#">
              <img src={LogoPath} alt="logo" />
            </a>
          </div>
          <button className="burger-menu__btn-close btn-close" onClick={closeMenu}>
            <span className="btn-close__tt"></span>
            <span className="btn-close__bb"></span>
          </button>
        </header>
        <nav className="burger-menu__nav">
          <ul className="burger-menu__list-top">
            <li className="burger-menu__item">
              <a to="#">новинки</a>
            </li>
            <li className="burger-menu__item">
              <a to="#">чоловіки</a>
            </li>
            <li className="burger-menu__item">
              <a to="#">жінки</a>
            </li>
            <li className="burger-menu__item">
              <a to="#">аксесуари</a>
            </li>
            <li className="burger-menu__item">
              <a to="#">акції</a>
            </li>
            <li className="burger-menu__item">
              <a to="#">допомога</a>
            </li>
          </ul>
          <ul className="burger-menu__list-bottom">
            <li className="burger-menu__item">
              <a to="#">увійти</a>
            </li>
            <li className="burger-menu__item">
              <a to="#">зареєструватися</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className={`burger-menu-overlay ${menuIsOpen ? 'active' : ''}`}></div>
    </>
  )
}

BurgerMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
}

export default BurgerMenu
