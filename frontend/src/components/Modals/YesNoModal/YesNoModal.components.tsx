export default function YesNoModal() {
  return (
    <div className="yesno__modal--container">
      <div id="alert-modal-hook"></div>
      <div id="backdrop-hook">
        <div className="backdrop"></div>
      </div>
      <div id="modal-hook">
        <div className="modal">
          <h2 className="heading-secondary ma-bt-md heading-warning">
            deactivate account
          </h2>
          <p className="modal_message">
            Do you want to <span>deactivate</span> your account?
          </p>
          <div className="form__group right">
            <button type="button" className="btn btn--small btn--red ma-r-sm">
              No
            </button>
            <button type="submit" className="btn btn--small btn--green false">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
