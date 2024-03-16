import InstPath from '../assets/icons/inst.svg'
import ViberPath from '../assets/icons/viber.svg'
import TelegramPath from '../assets/icons/telegram.svg'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-top__content">
            <div className="footer-top__wrapper">
              <ul className="footer-top__list">
                <h4 className="footer-top__header">Контакт-центр</h4>
                <li>098 900 09 09</li>
                <li>Пн - Пт 09:00 - 21:00</li>
                <li>Пн - Пт 09:00 - 21:00</li>
              </ul>
              <ul className="footer-top__list-media">
                <li>
                  <img src={InstPath} alt="Instagram" />
                </li>
                <li>
                  <img src={ViberPath} alt="Viber" />
                </li>
                <li>
                  <img src={TelegramPath} alt="Telegram" />
                </li>
              </ul>
            </div>
            <ul className="footer-top__list">
              <h4 className="footer-top__header">Покупцям</h4>
              <a href="#">
                <li>Оплата і доставка</li>
              </a>
              <a href="#">
                <li>Повернення</li>
              </a>
              <a href="#">
                <li>Питання та відповіді</li>
              </a>
            </ul>
            <ul className="footer-top__list">
              <h4 className="footer-top__header">Особистий кабінет</h4>
              <a href="#">
                <li>Мої дані</li>
              </a>
              <a href="#">
                <li>Історія замовлень</li>
              </a>
              <a href="#">
                <li>Улюблені</li>
              </a>
              <a href="#">
                <li>Розсилки</li>
              </a>
            </ul>
            <ul className="footer-top__list">
              <h4 className="footer-top__header">Про компанію</h4>
              <a href="#">
                <li>Про нас</li>
              </a>
              <a href="#">
                <li>Новини</li>
              </a>
              <a href="#">
                <li>Стати партнером</li>
              </a>
              <a href="#">
                <li>Угода користувача</li>
              </a>
            </ul>
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
