import arrowLeftPath from '../assets/icons/long-arrow-left.svg'
import arrowRightPath from '../assets/icons/long-arrow-right.svg'
import product_1Path from '../assets/img/product_1.png'
import product_2Path from '../assets/img/product_2.png'
import product_3Path from '../assets/img/product_3.png'

import ProductCard from './ProductCard'

function HottestProductsSection() {
  const cardData = [
    {
      imgPath: product_1Path,
      title: 'Термобілизна для бодібілдерів',
      category: 'Для чоловіків',
      remainder: '2 кольори',
      price: 4000,
    },
    {
      imgPath: product_2Path,
      title: 'Майка для бодібілдерів',
      category: 'Для жінок',
      remainder: '6 кольорів',
      price: 1100,
    },
    {
      imgPath: product_3Path,
      title: 'Ланцюжок для бодібілдерів',
      category: 'Аксесуари',
      remainder: '30 кг.',
      price: 2000,
    },
  ]

  return (
    <section className="hottest-products">
      <div className="container">
        <div className="hottest-products__content">
          <div className="hottest-products__header">
            <h2 className="hottest-products__title">Найгарячіші товари</h2>
            <div className="hottest-products__nav">
              <span className="hottest-products__page">01 / 03</span>
              <div className="hottest-products__arrows">
                <img src={arrowLeftPath} alt="arrow left" />
                <img src={arrowRightPath} alt="arrow right" />
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
