import LogoWhite from "../../assets/img/logo-white.png";

export default function BookTour() {
  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src={LogoWhite} alt="Natours logo" />
        </div>
        <img
          className="cta__img cta__img--1"
          src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588278/natours-tours/tour-5c88fa8cf4afda39709c2955-1686588273910-1.jpg"
          alt="Tour-pic-1"
        />
        <img
          className="cta__img cta__img--2"
          src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588279/natours-tours/tour-5c88fa8cf4afda39709c2955-1686588273960-3.jpg"
          alt="Tour-pic-2"
        />
        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            7 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          {/* btn--green */}
          <a
            className="btn btn--medium btn--red span-all-rows"
            href="/auth/login?redirect=/tours/5c88fa8cf4afda39709c2955"
          >
            Cancel
          </a>
          {/* Book tour */}
        </div>
      </div>
      <div className="tour_booking set-tour_booking">
        <div className="tour_dates set-tour_dates">
          <div className="dates_container">
            <h3>Available Dates</h3>
            <p>December 6, 2023</p>
            <p>January 5, 2024</p>
            <p>February 12, 2024</p>
          </div>
          <div className="dates_container">
            <h3>Tickets Available</h3>
            <p>9</p>
            <p>8</p>
            <p>9</p>
          </div>
          <div className="vertical-line">&nbsp;</div>
          <form className="form_booking">
            <div className="date_input">
              <svg className="icon-green icon-small icon-down booking-down">
                <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
              </svg>
              <select name="date">
                <option defaultValue="">CHOOSE DATE:</option>
                <option defaultValue="2023-12-06T10:00:00.000Z">
                  December 6, 2023
                </option>
                <option defaultValue="2024-01-05T10:00:00.000Z">
                  January 5, 2024
                </option>
                <option defaultValue="2024-02-12T10:00:00.000Z">
                  February 12, 2024
                </option>
              </select>
            </div>
            <div className="booking_tickets">
              <button type="button">-</button>
              <p>1</p>
              <button type="button">+</button>
            </div>
            <div className="center">
              <button
                type="submit"
                className="btn btn--green btn--large ma-t-lg false"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
