export default function TourReviews() {
  return (
    // <section className="section-reviews"><p className="no-review">No reviews yet</p></section>

    <section className="section-reviews">
      <div className="reviews">
        <div className="reviews__card">
          <div className="reviews__avatar">
            <img
              className="reviews__avatar-img"
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589438/natours-users/user-5c8a1dfa2f8fb814b56fa181-1686589434784.jpg"
              alt="Lourdes Browning"
            />
            <h6 className="reviews__user">Lourdes Browning</h6>
          </div>
          <p className="reviews__text">
            Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros
            condimentum scelerisque taciti mattis praesent feugiat eu nascetur a
            tincidunt
          </p>
          <div className="reviews__rating">
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div className="reviews__card">
          <div className="reviews__avatar">
            <img
              className="reviews__avatar-img"
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686594510/natours-users/user-5c8a1e1a2f8fb814b56fa182-1686594510236.jpg"
              alt="Sophie Louise Hart"
            />
            <h6 className="reviews__user">Sophie Louise Hart</h6>
          </div>
          <p className="reviews__text">
            Pulvinar taciti etiam aenean lacinia natoque interdum fringilla
            suspendisse nam sapien urna!
          </p>
          <div className="reviews__rating">
            <svg className="icon-small undefined icon-color-4">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-4">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-4">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-4">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-inactive">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <div className="reviews__card">
          <div className="reviews__avatar">
            <img
              className="reviews__avatar-img"
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589601/natours-users/user-5c8a211f2f8fb814b56fa188-1686589597153.jpg"
              alt="Cristian Vega"
            />
            <h6 className="reviews__user">Cristian Vega</h6>
          </div>
          <p className="reviews__text">
            Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit
            ultricies dapibus
          </p>
          <div className="reviews__rating">
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            <svg className="icon-small undefined icon-color-5">
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="center">
        <button type="button" className="btn btn--medium btn--white">
          See all reviews
        </button>
      </div>
    </section>
  );
}
