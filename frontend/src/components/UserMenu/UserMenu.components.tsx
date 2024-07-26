import { Link } from "react-router-dom";

export default function UserMenu() {
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li>
          <Link
            aria-current="page"
            className="side-nav--active"
            to="/account/profile"
          >
            <svg>
              <use xlinkHref="/img/icons.svg#icon-user"></use>
            </svg>
            Profile
          </Link>
        </li>
        <li>
          <Link className="" to="/account/security">
            <svg>
              <use xlinkHref="/img/icons.svg#icon-lock"></use>
            </svg>
            Security
          </Link>
        </li>
        <li>
          <Link className="" to="/account/bookings">
            <svg>
              <use xlinkHref="/img/icons.svg#icon-briefcase"></use>
            </svg>
            My bookings
          </Link>
        </li>
        <li>
          <Link aria-current="page" className="" to="/account/reviews">
            <svg>
              <use xlinkHref="/img/icons.svg#icon-star"></use>
            </svg>
            My reviews
          </Link>
        </li>
      </ul>
      <div className="admin-nav">
        <h5 className="admin-nav__heading">admin</h5>
        <ul className="side-nav">
          <li>
            <Link className="" to="/manage/tours">
              <svg>
                <use xlinkHref="/img/icons.svg#icon-map"></use>
              </svg>
              Manage tours
            </Link>
          </li>
          <li>
            <Link className="" to="/manage/users">
              <svg>
                <use xlinkHref="/img/icons.svg#icon-users"></use>
              </svg>
              Manage users
            </Link>
          </li>
          <li>
            <Link className="" to="/manage/reviews">
              <svg>
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              Manage reviews
            </Link>
          </li>
          <li>
            <Link className="" to="/manage/bookings">
              <svg>
                <use xlinkHref="/img/icons.svg#icon-briefcase"></use>
              </svg>
              Manage bookings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
