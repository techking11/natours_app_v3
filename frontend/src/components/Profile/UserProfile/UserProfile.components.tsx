export default function UserProfile() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="user-view__form-container">
        <div className="user-header">
          <img
            className="form__user-photo"
            src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589411/natours-users/user-5c8a1d5b0190b214360dc057-1686589406758.jpg"
            alt="User Profile"
          />
          <div>
            <h2 className="heading-secondary">Profile</h2>
            <p className="user-role">admin</p>
          </div>
        </div>
        <div className="details_container">
          <div className="details_header">
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Provider</p>
            <p>Status</p>
          </div>
          <div className="details_content">
            <p>Jonas Schmedtmann</p>
            <p>admin@natours.io</p>
            <p>+351289291069</p>
            <p className="details_provider">local</p>
            <p>Active</p>
          </div>
          <div className="details_verify">
            <div className="verification-check email-check">
              <button type="button" className="btn-secondary">
                Verify email
              </button>
            </div>
            <div className="verification-check phone-check">
              <button type="button" className="btn-secondary">
                Verify phone
              </button>
            </div>
          </div>
        </div>
        <a
          className="btn btn--medium btn--green ma-t-lg"
          href="/account/profile/update"
        >
          Edit Profile
        </a>
      </div>
    </div>
  );
}
