export default function UpdateReviewsModal({ openModal }) {

  return (
    <div className="form-modal">
      <h2 className="heading-secondary ma-bt-md undefined">Update Review</h2>
      <form>
        <div className="review_tour_details">
          <img
            className="review_tour_image"
            src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588276/natours-tours/tour-5c88fa8cf4afda39709c2955-1686588270483-cover.jpg"
            alt="The Sea Explorer"
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
            <p>You visited on August 18, 2023</p>
            <div className="input-rating">
              <button type="button" className="on--5">
                <svg className="icon-small icon-rating icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </button>
              <button type="button" className="on--5">
                <svg className="icon-small icon-rating icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </button>
              <button type="button" className="on--5">
                <svg className="icon-small icon-rating icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </button>
              <button type="button" className="on--5">
                <svg className="icon-small icon-rating icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </button>
              <button type="button" className="on--5">
                <svg className="icon-small icon-rating icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="review_text_container">
          <textarea
            className="review_text"
            name="review"
            cols={57}
            rows={10}
            placeholder="Tell us about your trip . . . ."
            defaultValue="Nice"
          />
        </div>
        <div className="form__group right">
          <button type="button" className="btn btn--small btn--red ma-r-sm" onClick={openModal}>
            Cancel
          </button>
          <button type="submit" className="btn btn--small btn--green false">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
