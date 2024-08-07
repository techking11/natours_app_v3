import Paginate from "../Paginate/Paginate.components";

export default function ReviewsContents() {
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
              <button type="button" className="btn-secondary">
                Update Review
              </button>
              <button type="button" className="btn-secondary secondary--red">
                Delete Review
              </button>
            </div>
          </div>
          <p className="reviews__text">Nice</p>
          <div className="line line-small">&nbsp;</div>
          <div className="review_tour_details">
            <img
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1690124240/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690124240396-cover.jpg"
              alt="The Mountain Biker"
              className="review_tour_image"
            />
            <div className="review_tour_description">
              <h3>
                <a
                  className="review_tour_link"
                  href="/tours/64bd36868b4c62a9cb577d8b"
                >
                  The Mountain Biker
                </a>
              </h3>
              <p className="ma-bt-sm">You visited on September 22, 2023</p>
              <svg className="icon-small icon-rating icon-color-2">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-2">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-inactive">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-inactive">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-inactive">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
            </div>
            <div className="review_links">
              <button type="button" className="btn-secondary">
                Update Review
              </button>
              <button type="button" className="btn-secondary secondary--red">
                Delete Review
              </button>
            </div>
          </div>
          <p className="reviews__text">Very Good</p>
          <p className="liked_text">1 people found this helpful</p>
          <div className="line line-small">&nbsp;</div>
          <div className="review_tour_details">
            <img
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588452/natours-tours/tour-5c88fa8cf4afda39709c2961-1686588447424-cover.jpg"
              alt="The Park Camper"
              className="review_tour_image"
            />
            <div className="review_tour_description">
              <h3>
                <a
                  className="review_tour_link"
                  href="/tours/5c88fa8cf4afda39709c2961"
                >
                  The Park Camper
                </a>
              </h3>
              <p className="ma-bt-sm">You visited on March 20, 2024</p>
              <svg className="icon-small icon-rating icon-color-4">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-4">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-4">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-color-4">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <svg className="icon-small icon-rating icon-inactive">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
            </div>
            <div className="review_links">
              <button type="button" className="btn-secondary">
                Update Review
              </button>
              <button type="button" className="btn-secondary secondary--red">
                Delete Review
              </button>
            </div>
          </div>
          <p className="reviews__text">Beautiful</p>
          <div className="line line-small">&nbsp;</div>
        </div>
        <Paginate />
      </div>
    </div>
  );
}
