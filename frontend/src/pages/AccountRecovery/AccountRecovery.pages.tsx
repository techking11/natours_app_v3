import { Link } from "react-router-dom";

export default function AccountRecovery() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-md undefined">
          Account Recovery
        </h2>
        <p className="title__description">
          Please enter your email and choose a way to recover your account
        </p>
        <div className="form__group ma-bt-md">
          <input
            className="form__input"
            name="email"
            id="email"
            type="email"
            placeholder="email"
            required
          // value=""
          />
        </div>
        <div className="sub-heading-container">
          <h3 className="sub-heading">Choose a way:</h3>
        </div>
        <div className="center">
          <button type="button" className="btn btn--green btn--x-large ma-t-lg">
            Get Verification <span className="bold">link</span> in email
          </button>
        </div>
        <div className="center">
          <button type="button" className="btn btn--green btn--x-large ma-t-lg">
            Get Verification <span className="bold">code</span> in email
          </button>
        </div>
        <div className="center">
          <button type="button" className="btn btn--green btn--x-large ma-t-lg">
            Get Verification <span className="bold">code</span> in phone
          </button>
        </div>
        <div className="form__link">
          Go back to
          <Link className="btn-secondary" to="/auth/login">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
