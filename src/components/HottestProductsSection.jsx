import ArrowLeftPath from '../assets/icons/long-arrow-left.svg'
import ArrowRightPath from '../assets/icons/long-arrow-right.svg'
import Product_1Path from '../assets/img/product_1.png'
import Product_2Path from '../assets/img/product_2.png'
import Product_3Path from '../assets/img/product_3.png'

import ProductCard from './ProductCard'

function HottestProductsSection() {
  const cardData = [
    {
      imgPath: Product_1Path,
      title: 'Термобілизна для бодібілдерів',
      category: 'Для чоловіків',
      remainder: '2 кольори',
      price: 4000,
    },
    {
      imgPath: Product_2Path,
      title: 'Майка для бодібілдерів',
      category: 'Для жінок',
      remainder: '6 кольорів',
      price: 1100,
    },
    {
      imgPath: Product_3Path,
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
