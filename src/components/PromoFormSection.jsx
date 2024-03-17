function PromoFormSection() {
  return (
    <section className="promo-form">
      <div className="container">
        <div className="promo-form__content">
          <h2 className="promo-form__title">Спіймай всі акції!</h2>
          <p className="promo-form__text main-text">
            Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у
            нашому магазині. А у нас їх багато :D
          </p>
          <form className="promo-form__form">
            <input className="promo-form__input" type="text" placeholder="ВВЕДІТЬ" />
            <button className="promo-form__btn btn btn_gray">Підписатись</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PromoFormSection
