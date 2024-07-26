import Filters from "../Filters/Filters.components";
import Paginate from "../Paginate/Paginate.components";

export default function ManageReviews() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="manage-view__inner-container">
        <div>
          <div className="manage-top">
            <Filters />
          </div>
          <div className="table-header reviews-table-grid">
            <p>User</p>
            <p>Tour</p>
            <p>Actions</p>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="reviews-table-grid">
            <div className="table-img-item">
              <img
                className="manage-user-img"
                src="https://lh3.googleusercontent.com/a/ACg8ocJT4lvfT3hHokyL7Dhb0N3P1KaNpiBtAXxn_2xjUJ2D3z6Psfs=s96-c"
                alt="Nay Myo Aung"
              />
              <div>
                <h3>Nay Myo Aung</h3>
                <p>Reviewed on July 25, 2024</p>
              </div>
            </div>
            <div className="table-img-item">
              <img
                className="manage-tour-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1690124240/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690124240396-cover.jpg"
                alt="The Mountain Biker"
              />
              <div>
                <h3>The Mountain Biker</h3>
                <svg className="icon-small undefined icon-color-2">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-2">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </div>
            </div>
            <div className="actions">
              <button
                type="button"
                className="btn-secondary btn--xs secondary--red"
              >
                <svg className="icon-delete icon-small">
                  <use xlinkHref="/img/icons.svg#icon-trash-2"></use>
                </svg>
                <p className="action-type">Delete</p>
              </button>
              <button type="button" className="btn-secondary btn--xs">
                <svg className="icon-edit icon-small">
                  <use xlinkHref="/img/icons.svg#icon-edit"></use>
                </svg>
                <p className="action-type">Edit</p>
              </button>
            </div>
          </div>
          <p className="manage-review-text">Very Good</p>
          <div className="line line-xs">&nbsp;</div>
          <div className="reviews-table-grid">
            <div className="table-img-item">
              <img
                className="manage-user-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1713417711/natours-users/user-661d5982c4a46525e12b9b9a-1713417711098.jpg"
                alt="manan bhasin"
              />
              <div>
                <h3>manan bhasin</h3>
                <p>Reviewed on April 18, 2024</p>
              </div>
            </div>
            <div className="table-img-item">
              <img
                className="manage-tour-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588353/natours-tours/tour-5c88fa8cf4afda39709c2951-1686588347579-cover.jpg"
                alt="The Forest Hiker"
              />
              <div>
                <h3>The Forest Hiker</h3>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              </div>
            </div>
            <div className="actions">
              <button
                type="button"
                className="btn-secondary btn--xs secondary--red"
              >
                <svg className="icon-delete icon-small">
                  <use xlinkHref="/img/icons.svg#icon-trash-2"></use>
                </svg>
                <p className="action-type">Delete</p>
              </button>
              <button type="button" className="btn-secondary btn--xs">
                <svg className="icon-edit icon-small">
                  <use xlinkHref="/img/icons.svg#icon-edit"></use>
                </svg>
                <p className="action-type">Edit</p>
              </button>
            </div>
          </div>
          <p className="manage-review-text">badiya tour hai</p>
          <div className="line line-xs">&nbsp;</div>
          <div className="line line-xs">&nbsp;</div>
        </div>
        <div className="paginate">
          <Paginate />
        </div>
      </div>
    </div>
  );
}
