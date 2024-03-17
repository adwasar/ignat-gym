import ArrowLeftPath from '../assets/icons/long-arrow-left.svg'
import ArrowRightPath from '../assets/icons/long-arrow-right.svg'

import cardData from '../data/cardData.json'

import ProductCard from './ProductCard'

function HottestProductsSection() {
  return (
    <section className="hottest-products">
      <div className="container">
        <div className="hottest-products__content">
          <div className="hottest-products__header">
            <h2 className="hottest-products__title">Найгарячіші товари</h2>
            <div className="hottest-products__nav">
              <span className="hottest-products__page">01 / 03</span>
              <div className="hottest-products__arrows">
                <img src={ArrowLeftPath} alt="arrow left" />
                <img src={ArrowRightPath} alt="arrow right" />
              </div>
            </div>
          </div>
          <div className="hottest-products__cards">
            {cardData.map((el, i) => (
              <ProductCard
                imgPath={el.imgPath}
                title={el.title}
                category={el.category}
                remainder={el.remainder}
                price={el.price}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HottestProductsSection
