import Filters from "../Filters/Filters.components";
import Paginate from "../Paginate/Paginate.components";

export default function ManageBookings() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link"></div>
      <div className="manage-view__inner-container">
        <div>
          <div className="manage-top">
            <Filters />
          </div>
          <div className="table-header bookings-table-grid">
            <p>User</p>
            <p>Tour</p>
            <p>Payment</p>
            <p>Actions</p>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="bookings-table-grid">
            <div className="table-img-item">
              <img
                className="manage-user-img"
                src="https://lh3.googleusercontent.com/a/ACg8ocJT4lvfT3hHokyL7Dhb0N3P1KaNpiBtAXxn_2xjUJ2D3z6Psfs=s96-c"
                alt="Nay Myo Aung"
              />
              <div>
                <h3>Nay Myo Aung</h3>
                <p>Booked on July 25, 2024</p>
              </div>
            </div>
            <div className="table-img-item">
              <img
                className="manage-tour-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588452/natours-tours/tour-5c88fa8cf4afda39709c2961-1686588447424-cover.jpg"
                alt="The Park Camper"
              />
              <div>
                <h3>The Park Camper</h3>
                <p>March 20, 2024</p>
              </div>
            </div>
            <div className="manage-booking-price">
              <p>$1497</p>
              <p className="manage-booking-status booking_paid">paid</p>
            </div>
            <div className="actions">
              <button
                type="button"
                className="btn-secondary btn--xs secondary--red"
              >
                <svg className="icon-delete icon-small">
                  <use xlinkHref="/img/icons.svg#icon-x-square"></use>
                </svg>
                <p className="action-type">Cancel</p>
              </button>
            </div>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="bookings-table-grid">
            <div className="table-img-item">
              <img
                className="manage-user-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686592612/natours-users/user-64855c6fa2a143a4eb0041dd-1686592608301.jpg"
                alt="Maycee Piers"
              />
              <div>
                <h3>Maycee Piers</h3>
                <p>Booked on June 30, 2024</p>
              </div>
            </div>
            <div className="table-img-item">
              <img
                className="manage-tour-img"
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686588404/natours-tours/tour-5c88fa8cf4afda39709c295a-1686588399077-cover.jpg"
                alt="The Snow Adventurer"
              />
              <div>
                <h3>The Snow Adventurer</h3>
                <p>January 5, 2024</p>
              </div>
            </div>
            <div className="manage-booking-price">
              <p>$1896</p>
              <p className="manage-booking-status booking_paid">paid</p>
            </div>
            <div className="actions">
              <button
                type="button"
                className="btn-secondary btn--xs secondary--red"
              >
                <svg className="icon-delete icon-small">
                  <use xlinkHref="/img/icons.svg#icon-x-square"></use>
                </svg>
                <p className="action-type">Cancel</p>
              </button>
            </div>
          </div>
          <div className="line line-xs">&nbsp;</div>
          <div className="line line-xs">&nbsp;</div>
        </div>
        <div className="paginate">
          <Paginate />
        </div>
      </div>
    </div>
  );
}
