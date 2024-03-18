import PropTypes from 'prop-types'

function Slider({ imagePath, title, subTitle }) {
  return (
    <div className="hero-slider__bg" style={{ backgroundImage: `url(${imagePath})` }}>
      <div className="container">
        <div className="hero-slider__content-wrapper">
          <div className="hero-slider__content">
            <div className="hero-slider__left">
              <h1 className="hero-slider__title">{title}</h1>
              <p className="hero-slider__sub-title">{subTitle}</p>
            </div>
            <div className="hero-slider__right">
              <p className="hero-slider__discounts">Знижки до 40%</p>
              <p>Залишився лише тиждень</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default Slider
