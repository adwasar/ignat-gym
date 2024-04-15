import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import logoPath from '../assets/icons/Logo.png'

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
      <div className={`burger-menu ${menuIsOpen ? 'active' : ''}`} ref={burgerMenuRef}>
        <header className="burger-menu__header">
          <div className="burger-menu__logo">
            <a href="#" onClick={closeMenu}>
              <img src={logoPath} alt="logo" />
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
              <a href="#" onClick={closeMenu}>
                новинки
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                чоловіки
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                жінки
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                аксесуари
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                акції
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                допомога
              </a>
            </li>
          </ul>
          <ul className="burger-menu__list-bottom">
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                увійти
              </a>
            </li>
            <li className="burger-menu__item">
              <a href="#" onClick={closeMenu}>
                зареєструватися
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`burger-menu-overlay ${menuIsOpen ? 'active' : ''}`}></div>
    </>
  )
}

BurgerMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
}

export default BurgerMenu
