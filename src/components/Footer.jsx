import instPath from '../assets/icons/inst.svg'
import viberPath from '../assets/icons/viber.svg'
import telegramPath from '../assets/icons/telegram.svg'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-top__content">
            <div className="footer-top__wrapper">
              <div className="footer-top__col">
                <h4 className="footer-top__header">Контакт-центр</h4>
                <ul className="footer-top__list">
                  <li>098 900 09 09</li>
                  <li>Пн - Пт 09:00 - 21:00</li>
                  <li>Пн - Пт 09:00 - 21:00</li>
                </ul>
              </div>
              <ul className="footer-top__list-media">
                <li>
                  <img src={instPath} alt="Instagram" />
                </li>
                <li>
                  <img src={viberPath} alt="Viber" />
                </li>
                <li>
                  <img src={telegramPath} alt="Telegram" />
                </li>
              </ul>
            </div>
            <div className="footer-top__col">
              <h4 className="footer-top__header">Покупцям</h4>
              <ul className="footer-top__list">
                <li>
                  <a href="#">Оплата і доставка</a>
                </li>
                <li>
                  <a href="#">Повернення</a>
                </li>
                <li>
                  <a href="#">Питання та відповіді</a>
                </li>
              </ul>
            </div>
            <div className="footer-top__col">
              <h4 className="footer-top__header">Особистий кабінет</h4>
              <ul className="footer-top__list">
                <li>
                  <a href="#">Мої дані</a>
                </li>
                <li>
                  <a href="">Історія замовлень</a>
                </li>
                <li>
                  <a href="#">Улюблені</a>
                </li>
                <li>
                  <a href="#">Розсилки</a>
                </li>
              </ul>
            </div>
            <div className="footer-top__col">
              <h4 className="footer-top__header">Про компанію</h4>
              <ul className="footer-top__list">
                <li>
                  <a href="#">Про нас</a>
                </li>
                <li>
                  <a href="#">Новини</a>
                </li>
                <li>
                  <a href="#">Стати партнером</a>
                </li>
                <li>
                  <a href="#">Угода користувача</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__content">
            <nav className="footer-bottom__nav">
              <ul className="footer-bottom__nav-list">
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
            <div className="footer-bottom__no-copyright">
              © 2022 — 2023 IGNAT. Усі права захищені.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
