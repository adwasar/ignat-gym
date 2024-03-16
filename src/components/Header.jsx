import LogoPath from '../assets/icons/Logo.png'
import SearchPath from '../assets/icons/search.svg'
import HeartPath from '../assets/icons/heart.svg'
import BagPath from '../assets/icons/bag.svg'

function Header() {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-top__content">
              <div className="header-top__contacts">
                <ul className="header-top__contacts-list">
                  <a href="#">
                    <li className="header-top__phone">098 900 09 09</li>
                  </a>
                  <a href="#">
                    <li className="header-top__help">Допомога</li>
                  </a>
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
                <img src={LogoPath} alt="Logo" />
              </div>
              <nav className="header-bottom__nav">
                <ul className="header-bottom__nav-list">
                  <a href="#">
                    <li>новинки</li>
                  </a>
                  <a href="#">
                    <li>чоловіки</li>
                  </a>
                  <a href="#">
                    <li>жінки</li>
                  </a>
                  <a href="#">
                    <li>аксесуари</li>
                  </a>
                  <a href="#">
                    <li>акції</li>
                  </a>
                </ul>
              </nav>
              <div className="header-bottom__right-nav">
                <form className="header-bottom__form">
                  <img src={SearchPath} alt="search" />
                  <input className="header-bottom__input" type="text" />
                </form>
                <img src={HeartPath} alt="heart" />
                <img src={BagPath} alt="heart" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
