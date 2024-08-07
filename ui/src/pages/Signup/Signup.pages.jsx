import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-md undefined">
          Create new account
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
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
              minLength={8}
              defaultValue=""
            />
          </div>
          <div className="form__group react-tel-input ">
            <div className="special-label">Phone</div>
            <input
              className="form-control invalid-number "
              placeholder="PHONE NUMBER"
              type="tel"
              required
              defaultValue="+91"
              style={{
                width: "100%",
                height: "4.9rem",
                fontSize: "1.5rem",
                fontFamily: "Lato, sans-serif",
                color: "inherit",
                backgroundColor: "rgb(242, 242, 242)",
                borderTop: "3px solid transparent",
                borderRight: "none",
                borderBottom: "3px solid transparent",
                borderLeft: "none",
                borderImage: "initial",
                borderRadius: "4px",
                transition: "all 0.3s ease 0s"
              }}
            />
            <div
              className="flag-dropdown invalid-number "
              style={{
                backgroundColor: "rgb(210, 210, 210)",
                borderTop: "none",
                borderRight: "none",
                borderBottom: "3px solid transparent",
                borderLeft: "none",
                borderImage: "initial",
                borderRadius: "4px",
                transition: "all 0.3s ease 0s"
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
          <div className="form__group undefined">
            <input
              className="form__input"
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              required
              minLength={8}
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="passwordConfirm"
              id="passwordConfirm"
              type="password"
              placeholder="Confirm password"
              required
              minLength={8}
              defaultValue=""
            />
          </div>
          <div className="center">
            <button
              type="submit"
              className="btn btn--green btn--large ma-t-lg false"
            >
              Sign up
            </button>
          </div>
          <div className="form__link">
            Already have an account?
            <Link className="btn-secondary" to="/auth/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
