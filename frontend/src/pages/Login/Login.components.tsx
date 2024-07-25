import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-md undefined">
          Log into your account
        </h2>
        <form>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="email"
              id="email"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="password"
              id="password"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <div className="form__forgot">
            <a className="btn-secondary" href="/auth/forgotPassword">
              Forgot Password?
            </a>
          </div>
          <div className="center">
            <button
              type="submit"
              className="btn btn--green btn--large ma-t-lg false"
            >
              Log in
            </button>
          </div>
          <div className="form__divider">
            <div className="line-horizontal">&nbsp;</div>
            <p className="content-between">or continue with</p>
            <div className="line-horizontal">&nbsp;</div>
          </div>
          <div className="center">
            <a
              className="btn btn--white btn--large btn--google"
              href="https://natours-v2.vercel.app/api/v2/auth/google?redirect=/"
            >
              Google
            </a>
          </div>
          <div className="form__link">
            Does not have an account?
            <Link className="btn-secondary" to="/auth/signup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
