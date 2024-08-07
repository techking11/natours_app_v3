import { Link } from "react-router-dom";

export default function EditUser() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link">
        <Link
          className="back-link"
          to="/manage/users"
        >
          <svg className="icon-small icon-back">
            <use xlinkHref="/img/icons.svg#icon-arrow-left"></use>
          </svg>
        </Link>
      </div>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md undefined">
          Update Basic Details
        </h2>
        <form>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              required
              defaultValue="vvng"
            />
          </div>
          <div className="form__group ma-bt-md">
            <input
              className="form__input"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
              defaultValue="xyz@gmail.com"
            />
          </div>
          <div className="form__group react-tel-input ">
            <div className="special-label">Phone</div>
            <input
              className="form-control invalid-number "
              placeholder="PHONE NUMBER"
              type="tel"
              required
              defaultValue="+91 97123-45687"
              style={{
                width: "100%",
                height: "4.9rem",
                fontSize: "1.5rem",
                fontFamily: `Lato, sans-serif`,
                color: "inherit",
                backgroundColor: `rgb(242, 242, 242)`,
                borderTop: `3px solid transparent`,
                borderRight: "none",
                borderBottom: "3px solid transparent",
                borderLeft: "none",
                borderImage: "initial",
                borderRadius: "4px",
                transition: `all 0.3s ease 0s`
              }}
            />
            <div
              className="flag-dropdown invalid-number "
              style={{
                backgroundColor: `rgb(210, 210, 210)`,
                borderTop: "none",
                borderRight: "none",
                borderBottom: `3px solid transparent`,
                borderLeft: "none",
                borderImage: "initial",
                borderRadius: "4px",
                transition: `all 0.3s ease 0s`
              }}
            >
              <div
                className="selected-flag"
                title="India: + 91"
                // tabIndex={0}
                // role="button"
                aria-haspopup="listbox"
              >
                <div className="flag in">
                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="form__group form__photo-upload">
            <img
              className="form__user-photo"
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686592612/natours-users/user-64855c6fa2a143a4eb0041dd-1686592608301.jpg"
              alt="User Profile"
            />
            <input
              className="form__upload"
              name="photo"
              id="photo"
              type="file"
              accept="image/*"
            />
            <label className="form__label" htmlFor="photo">
              Choose new photo
            </label>
            <span style={{ marginLeft: "1rem" }}></span>
          </div>
          <div className="form__group right">
            <button type="submit" className="btn btn--large btn--green false">
              Save settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
