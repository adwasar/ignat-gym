import avatarPath from '../assets/img/avatar.png'
import starFilledPath from '../assets/icons/star-filled.svg'
import starEmptyPath from '../assets/icons/star-empty.svg'

function ReviewCard() {
  return (
    <div className="review-card">
      <div className="review-card__header">
        <img src={avatarPath} alt="avatar" />
        <div className="review-card__wrapper">
          <div className="review-card__grade">
            <img src={starFilledPath} alt="star" />
            <img src={starFilledPath} alt="star" />
            <img src={starFilledPath} alt="star" />
            <img src={starFilledPath} alt="star" />
            <img src={starEmptyPath} alt="star" />
          </div>
          <span className="review-card__name">Жора Ремінгтон</span>
        </div>
      </div>
      <p className="review-card__text main-text">
        Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у
        подарунок, друзі...
      </p>
    </div>
  )
}

export default ReviewCard
