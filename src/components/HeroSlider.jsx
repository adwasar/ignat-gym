import ArrowLeftPath from '../assets/icons/hero-arrow-left.svg'
import ArrowRightPath from '../assets/icons/hero-arrow-right.svg'
import PaginationLinePath from '../assets/icons/pagination-line.svg'

function HeroSlider() {
  return (
    <div className="hero-slider">
      <div className="container">
        <div className="hero-slider__content-wrapper">
          <div className="hero-slider__content">
            <div className="hero-slider__left">
              <h1 className="hero-slider__title">
                Швидше. <br /> Вище. <br /> Сильніше.
              </h1>
              <p className="hero-slider__sub-title">Разом із Nike</p>
            </div>
            <div className="hero-slider__right">
              <p className="hero-slider__discounts">Знижки до 40%</p>
              <p>Залишився лише тиждень</p>
            </div>
          </div>
          <div className="hero-slider__arrows">
            <img src={ArrowLeftPath} alt="arrow left" className="hero-slider__arrow-left"></img>
            <img src={ArrowRightPath} alt="arrow left" className="hero-slider__arrow-right"></img>
          </div>
        </div>
        <div className="hero-slider__pagination">
          <img src={PaginationLinePath} alt="#" />
          <img src={PaginationLinePath} alt="#" />
          <img src={PaginationLinePath} alt="#" />
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
