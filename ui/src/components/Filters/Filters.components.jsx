import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ModalContainer from "../Modals/ModalContainer/ModalContainer.components";
import FilterModal from "../Modals/FilterModal/FilterModal.components";
import { toggleModal } from "../../store/modal/modal.reducer";

export default function Filters() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.modal.showModal);
  const openModal = () => dispatch(toggleModal());

  return (
    <>
      <ModalContainer showModal={showModal} openModal={openModal}>
        <FilterModal openModal={openModal} />
      </ModalContainer>
      <div className="manage-queries">
        <p>Total: 10</p>
        <p>Page: 1 (6 results)</p>
      </div>
      <div className="manage-queries">
        <button className="filter" onClick={openModal}>
          <p>Filter:</p>
          <svg className="icon-small icon-back">
            <use xlinkHref="/img/icons.svg#icon-filter"></use>
          </svg>
        </button>
        <div className="input-select-container">
          <label htmlFor="input-select-label">sort:</label>
          <div className="input-select">
            <svg className="icon-green icon-small icon-down">
              <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
            </svg>
            <select id="sort" name="sort">
              <option defaultValue="">Newest</option>
              <option defaultValue="price">Price Low to High</option>
              <option defaultValue="-price">Price High to Low</option>
              <option defaultValue="ratingsAverage">Rating Low to High</option>
              <option defaultValue="-ratingsAverage">Rating High to Low</option>
              <option defaultValue="-ratingsQuantity">More Reviews</option>
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
    </>
  );
}
