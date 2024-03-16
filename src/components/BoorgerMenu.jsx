import LogoPath from '../assets/icons/Logo.png'

function BurgerMenu() {
  return (
    <>
      <aside className="burger-menu">
        <header className="burger-menu__header">
          <div className="burger-menu__logo">
            <a href="#">
              <img src={LogoPath} alt="logo" />
            </a>
          </div>
          <button className="burger-menu__btn-close btn-close">
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
      <div className="burger-menu-overlay"></div>
    </>
  )
}

export default BurgerMenu
