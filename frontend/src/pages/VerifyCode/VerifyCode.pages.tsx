export default function VerifyCode() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-md undefined">Verify Code</h2>
        <form>
          <p className="title__description">
            Please enter the code you recieved in phone/email below
          </p>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="code"
              id="code"
              type="text"
              placeholder="Enter your code here"
              required
              minLength={6}
              maxLength={6}
            // value=""
            />
          </div>
          <div className="center">
            <button
              type="submit"
              className="btn btn--green btn--large ma-t-lg false"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
