import PropTypes from 'prop-types'

import HeartPath from '../assets/icons/products-slider-heart.svg'

function ProductCard({ imgPath, title, category, remainder, price }) {
  return (
    <div className="product-card">
      <div className="product-card__img-container">
        <img src={imgPath} alt="product" className="product-card__img" />
      </div>
      <h3 className="product-card__title">{title}</h3>
      <span className="product-card__category">{category}</span>
      <br />
      <span className="product-card__remainder">{remainder}</span>
      <br />
      <span className="product-card__price">{`${price} грн.`}</span>
      <img className="product-card__like" src={HeartPath} alt="heart" />
    </div>
  )
}

ProductCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  remainder: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductCard
