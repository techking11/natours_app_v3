import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import FilterModal from "../Modals/FilterModal/FilterModal.components";

export default function Filters() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <FilterModal />
      <div className="manage-queries">
        <p>Total: 10</p>
        <p>Page: 1 (6 results)</p>
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
        {
          pathname === '/manage/tours' ? (
            <Link className="btn-secondary center" to="/manage/tours/create">
              + Create Tour
            </Link>
          ) : ""
        }
      </div>
    </Fragment>
  );
}
