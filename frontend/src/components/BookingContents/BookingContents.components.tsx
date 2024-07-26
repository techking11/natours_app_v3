import Paginate from "../Paginate/Paginate.components";

export default function BookingContents() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="user-view__inner-container">
        <div>
          <p className="sub-heading ma-bt-md">
            * Full refund if cancel booking before 30 days of tour
          </p>
          <div className="review_tour_details">
            <img
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588276/natours-tours/tour-5c88fa8cf4afda39709c2955-1686588270483-cover.jpg"
              alt="The Sea Explorer"
              className="review_tour_image"
            />
            <div className="review_tour_description">
              <h3>
                <a
                  className="review_tour_link"
                  href="/tours/5c88fa8cf4afda39709c2955"
                >
                  The Sea Explorer
                </a>
              </h3>
              <p className="ma-bt-sm">You booked on August 18, 2023</p>
              <p className="booking-price">
                Total: $497{" "}
                <span className="booking_status booking_paid">paid</span>
              </p>
            </div>
            <div className="review_links">
              <a
                className="btn-secondary"
                href="https://invoice.stripe.com/i/acct_1NVUoOSAzLQxYwF7/test_YWNjdF8xTlZVb09TQXpMUXhZd0Y3LF9RWFB2WGRWQ3FOeEVoZm1vUmVTZDByc0M2STVFQ1NsLDExMjQyOTQ1Mg0200ASrPDbMa?s=ap"
                target="_blank"
              >
                View Receipt
              </a>
            </div>
          </div>
          <div className="booking-status-container">
            <div className="bd-container">
              <svg className="icon-green icon-small">
                <use xlinkHref="/img/icons.svg#icon-chevron-right"></use>
              </svg>
              <p>
                <span>Start date:</span> August 18, 2023
              </p>
            </div>
            <div className="bd-container">
              <svg className="icon-green icon-small">
                <use xlinkHref="/img/icons.svg#icon-chevron-right"></use>
              </svg>
              <p>
                <span>Tickets:</span> 1 ($497 per person)
              </p>
            </div>
            <div className="bd-container">
              <svg className="icon-green icon-small">
                <use xlinkHref="/img/icons.svg#icon-chevron-right"></use>
              </svg>
              <p>
                <span>Tour Status:</span> Tour over{" "}
              </p>
            </div>
            <div className="bd-container">
              <svg className="icon-green icon-small">
                <use xlinkHref="/img/icons.svg#icon-chevron-right"></use>
              </svg>
              <p>
                <span>Refundable:</span> No
              </p>
            </div>
          </div>
          <span className="read-more">Show Less</span>
          <div className="line line-small">&nbsp;</div>
          <div className="review_tour_details">
            <img
              src="https://res.cloudinary.com/dfokabou4/image/upload/v1690124240/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690124240396-cover.jpg"
              alt="The Mountain Biker"
              className="review_tour_image"
            />
            <div className="review_tour_description">
              <h3>
                <a
                  className="review_tour_link"
                  href="/tours/64bd36868b4c62a9cb577d8b"
                >
                  The Mountain Biker
                </a>
              </h3>
              <p className="ma-bt-sm">You booked on September 22, 2023</p>
              <p className="booking-price">
                Total: $649{" "}
                <span className="booking_status booking_paid">paid</span>
              </p>
            </div>
            <div className="review_links">
              <a
                className="btn-secondary"
                href="https://invoice.stripe.com/i/acct_1NVUoOSAzLQxYwF7/test_YWNjdF8xTlZVb09TQXpMUXhZd0Y3LF9RWFB0V2JTaGZVbk8xejVmS293RWd0MmRZWUdBWEdXLDExMjQyOTMyNg0200XTcw3e39?s=ap"
                target="_blank"
              >
                View Receipt
              </a>
            </div>
          </div>
          <span className="read-more">Show Details</span>
          <div className="line line-small">&nbsp;</div>
        </div>
        <Paginate />
      </div>
    </div>
  );
}
