import ArrowLeftPath from '../assets/icons/long-arrow-left.svg'
import ArrowRightPath from '../assets/icons/long-arrow-right.svg'

import ReviewCard from './ReviewCard'

function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__header">
          <h2 className="reviews__title">Відгуки наших клієнтів</h2>
          <div className="reviews__nav">
            <span className="reviews__page">01 / 03</span>
            <div className="reviews__arrows">
              <img src={ArrowLeftPath} alt="arrow left" />
              <img src={ArrowRightPath} alt="arrow right" />
            </div>
          </div>
        </div>
        <div className="reviews__cards">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  )
}

export default Reviews
