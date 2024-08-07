import Paginate from "../Paginate/Paginate.components";

export default function ReviewsContents({ openModal }) {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="user-view__inner-container">
        <div>
          <div className="review_tour_details">
            <img
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588276/natours-tours/tour-5c88fa8cf4afda39709c2955-1686588270483-cover.jpg"
              alt="The Sea Explorer"
              className="review_tour_image"
            />
            <div className="review_tour_description">
              <h3>
                <a
                  className="review_tour_link"
                  href="/tours/5c88fa8cf4afda39709c2955"
                >
                  The Sea Explorer
                </a>
              </h3>
              <p className="ma-bt-sm">You visited on August 18, 2023</p>
              <svg className="icon-small icon-rating icon-color-5">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-5">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-5">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-5">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-5">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
            </div>
            <div className="review_links">
              <button type="button" className="btn-secondary" onClick={openModal}>
                Update Review
              </button>
              <button type="button" className="btn-secondary secondary--red" onClick={openModal}>
                Delete Review
              </button>
            </div>
          </div>
          <p className="reviews__text">Nice</p>
          <div className="line line-small">&nbsp;</div>
        </div>
        <Paginate />
      </div>
    </div>
  );
}
