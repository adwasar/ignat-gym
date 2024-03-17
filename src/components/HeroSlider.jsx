import { useState } from 'react'

import ArrowLeftPath from '../assets/icons/hero-arrow-left.svg'
import ArrowRightPath from '../assets/icons/hero-arrow-right.svg'

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const totalSlides = 3

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + totalSlides) % totalSlides
    setCurrentSlide(newIndex)
  }

  const nextSlide = () => {
    const newIndex = (currentSlide + 1 + totalSlides) % totalSlides
    setCurrentSlide(newIndex)
  }

  return (
    <section className="hero-slider">
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
            <img
              src={ArrowLeftPath}
              alt="arrow left"
              className="hero-slider__arrow-left"
              onClick={prevSlide}
            ></img>
            <img
              src={ArrowRightPath}
              alt="arrow left"
              className="hero-slider__arrow-right"
              onClick={nextSlide}
            ></img>
          </div>
        </div>
        <div className="hero-slider__pagination">
          {Array.from({ length: totalSlides }, (_, index) => (
            <svg
              key={index}
              width="19"
              height="4"
              viewBox="0 0 19 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H17"
                stroke={index === currentSlide ? '#ffffff' : '#626262'}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
