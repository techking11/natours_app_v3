export default function Description() {
  return (
    <section className="section-description">
      <div className="overview-box">
        <div className="overview-sub-box">
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-calendar"></use>
              </svg>
              <span className="overview-box__label">Next Date</span>
              <span className="overview-box__text">September 2023</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-trending-up"></use>
              </svg>
              <span className="overview-box__label">Difficulty</span>
              <span className="overview-box__text">medium</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-user"></use>
              </svg>
              <span className="overview-box__label">Participants</span>
              <span className="overview-box__text">20 people</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <span className="overview-box__label">Rating</span>
              <span className="overview-box__text">5 / 5</span>
            </div>
          </div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            <div className="overview-box__detail">
              <img
                className="overview-box__img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589639/natours-users/user-5c8a21f22f8fb814b56fa18a-1686589635147.jpg"
                alt="Aarav Lynn"
              />
              <span className="overview-box__label">lead-guide</span>
              <span className="overview-box__text">Aarav Lynn</span>
            </div>
            <div className="overview-box__detail">
              <img
                className="overview-box__img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589674/natours-users/user-5c8a23412f8fb814b56fa18c-1686589670954.jpg"
                alt="Ben Hadley"
              />
              <span className="overview-box__label">Tour-Guide</span>
              <span className="overview-box__text">Ben Hadley</span>
            </div>
            <div className="overview-box__detail">
              <img
                className="overview-box__img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589563/natours-users/user-5c8a201e2f8fb814b56fa186-1686589559373.jpg"
                alt="Kate Morrison"
              />
              <span className="overview-box__label">Tour-Guide</span>
              <span className="overview-box__text">Kate Morrison</span>
            </div>
          </div>
        </div>
      </div>
      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About The Mountain Biker</h2>
        <p className="description__text">
          Arguably the most exciting and dreaded mountain biking trail in India,
          the Manali-Leh trail takes you through the best of the Himalayas.
          Starting from Manali, the route stretches over the Himalayas and spans
          up to Khardungla- the highest motorable road in the world.
        </p>
        <p className="description__text"></p>
        <p className="description__text">
          The fact that this trail traverses some of the most grueling passes of
          the Lesser Himalayas along with the colossal nature in the backdrop,
          makes it one of the most challenging rides to accomplish. Dare to
          complete it at least once in a lifetime and live to narrate the
          stories of real thrill. This is the best place for mountain biking in
          India.
        </p>
      </div>
    </section>
  );
}
