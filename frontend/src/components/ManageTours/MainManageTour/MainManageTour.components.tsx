import { Link } from "react-router-dom";
import Paginate from "../../Paginate/Paginate.components";

export default function MainManageTour() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="manage-view__inner-container">
        <div>
          <div className="manage-top">
            <div className="manage-queries">
              <p>Total: 10</p>
              <p>Page: 1 (8 results)</p>
            </div>
            <div className="manage-queries">
              <div className="filter">
                <p>Filter:</p>
                <svg className="icon-small icon-back">
                  <use xlinkHref="/img/icons.svg#icon-filter"></use>
                </svg>
              </div>
              <div className="input-select-container">
                <label htmlFor="input-select-label">sort:</label>
                <div className="input-select">
                  <svg className="icon-green icon-small icon-down">
                    <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
                  </svg>
                  <select id="sort" name="sort">
                    <option value="">Newest</option>
                    <option value="price">Price Low to High</option>
                    <option value="-price">Price High to Low</option>
                    <option value="ratingsAverage">Rating Low to High</option>
                    <option value="-ratingsAverage">Rating High to Low</option>
                    <option value="-ratingsQuantity">More Reviews</option>
                  </select>
                </div>
              </div>
              <Link className="btn-secondary center" to="/manage/tours/create">
                + Create Tour
              </Link>
            </div>
          </div>
          <div className="table-header tours-table-grid">
            <p>Name</p>
            <p>Lead Guide</p>
            <p>Duration </p>
            <p>Price</p>
            <p>Actions</p>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="tours-table-grid">
            <a
              className="table-img-item table-link-item"
              href="/tours/64bd36868b4c62a9cb577d8b"
            >
              <img
                className="manage-tour-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1690124240/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690124240396-cover.jpg"
                alt="The Mountain Biker"
              />
              <div>
                <h3>The Mountain Biker</h3>
                <p>Created on July 23, 2023</p>
              </div>
            </a>
            <div className="leadguide-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589639/natours-users/user-5c8a21f22f8fb814b56fa18a-1686589635147.jpg"
                alt="Aarav Lynn"
              />
              <h3>Aarav Lynn</h3>
            </div>
            <p className="table-p-item">15 days</p>
            <p className="table-p-item">
              <span>$649</span> <br />
              <span className="table-span-item">(per person)</span>
            </p>
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
              <Link to="/manage/tours/edit" type="button" className="btn-secondary pl-5 btn--xs">
                <svg className="icon-edit icon-small">
                  <use xlinkHref="/img/icons.svg#icon-edit"></use>
                </svg>
                <p className="action-type">Edit</p>
              </Link>
            </div>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="tours-table-grid">
            <a
              className="table-img-item table-link-item"
              href="/tours/5c88fa8cf4afda39709c2951"
            >
              <img
                className="manage-tour-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588353/natours-tours/tour-5c88fa8cf4afda39709c2951-1686588347579-cover.jpg"
                alt="The Forest Hiker"
              />
              <div>
                <h3>The Forest Hiker</h3>
                <p>Created on July 18, 2023</p>
              </div>
            </a>
            <div className="leadguide-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589621/natours-users/user-5c8a21d02f8fb814b56fa189-1686589617420.jpg"
                alt="Steve T. Scaife"
              />
              <h3>Steve T. Scaife</h3>
            </div>
            <p className="table-p-item">5 days</p>
            <p className="table-p-item">
              <span>$397</span> <br />
              <span className="table-span-item">(per person)</span>
            </p>
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
          <div className="line line-xs">&nbsp;</div>
        </div>
        <Paginate />
      </div>
    </div>
  );
}
