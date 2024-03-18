import { useState } from 'react'

import ArrowLeftPath from '../assets/icons/hero-arrow-left.svg'
import ArrowRightPath from '../assets/icons/hero-arrow-right.svg'
import HeroBg_1Path from '../assets/img/hero-bg-1.png'
import HeroBg_2Path from '../assets/img/hero-bg-2.jpeg'
import HeroBg_3Path from '../assets/img/hero-bg-3.jpeg'

import Slider from './Slider'

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliders = [
    { imagePath: HeroBg_1Path, title: 'Швидше. Вище. Сильніше', subTitle: 'Разом iз Nike' },
    { imagePath: HeroBg_2Path, title: 'Title_2. Title_2. Title_2.', subTitle: 'Разом iз Adidas' },
    { imagePath: HeroBg_3Path, title: 'Title_2. Title_2. Title_2', subTitle: 'Разом з Puma' },
  ]

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
      <div
        className="hero-slider__wrapper"
        style={{ transform: `translateX(-${100 * currentSlide}%)` }}
      >
        {sliders.map((slide) => (
          <Slider imagePath={slide.imagePath} title={slide.title} subTitle={slide.subTitle} />
        ))}
      </div>
      <div className="hero-slider__container-nav">
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
