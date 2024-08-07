import { Link } from "react-router-dom";
import Filters from "../../Filters/Filters.components";
import Paginate from "../../Paginate/Paginate.components";

export default function MainManagerUser() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="manage-view__inner-container">
        <div className="manage--view__inner--sub">
          <div className="manage-top">
            <Filters />
          </div>
          <div className="table-header users-table-grid">
            <p>Name</p>
            <p>Provider</p>
            <p>Role</p>
            <p>Status</p>
            <p>Actions</p>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="users-table-grid">
            <a
              className="table-img-item table-link-item"
              href="/manage/users/profile/66a2404d6df8fa1d7eed24e7"
            >
              <img
                className="manage-user-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686592612/natours-users/user-64855c6fa2a143a4eb0041dd-1686592608301.jpg"
                alt="vvng"
              />
              <div>
                <h3>vvng</h3>
                <p className="useritem-email">xyz@gmail.com</p>
              </div>
            </a>
            <p className="table-p-item">local</p>
            <p className="table-p-item">user</p>
            <p className="useritem-status status-active">active</p>
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
              <Link to="/manage/users/edit" type="button" className="btn-secondary btn--xs">
                <svg className="icon-edit icon-small">
                  <use xlinkHref="/img/icons.svg#icon-edit"></use>
                </svg>
                <p className="action-type">Edit</p>
              </Link>
            </div>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="users-table-grid">
            <a
              className="table-img-item table-link-item"
              href="/manage/users/profile/66a23c125187cdbd5d08aa9a"
            >
              <img
                className="manage-user-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686592612/natours-users/user-64855c6fa2a143a4eb0041dd-1686592608301.jpg"
                alt="Ankita Siddhu"
              />
              <div>
                <h3>Ankita Siddhu</h3>
                <p className="useritem-email">gauravastsh202@gmail.com</p>
              </div>
            </a>
            <p className="table-p-item">local</p>
            <p className="table-p-item">user</p>
            <p className="useritem-status status-active">active</p>
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
        <div className="paginate">
          <Paginate />
        </div>
      </div>
    </div>
  );
}
