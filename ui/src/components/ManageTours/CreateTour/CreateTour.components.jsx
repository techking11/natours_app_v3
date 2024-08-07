import { Link } from "react-router-dom";

export default function CreateTours() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link">
        <Link className="back-link" to="/manage/tours">
          <svg className="icon-small icon-back">
            <use xlinkHref="/img/icons.svg#icon-arrow-left"></use>
          </svg>
        </Link>
      </div>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md undefined">
          Create new tour
        </h2>
        <form className="form-create-tour">
          <p className="tourform-sub-heading span-all-columns">Tour Details:</p>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="name"
              id="name"
              type="text"
              placeholder="Tour Name"
              required
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="duration"
              id="duration"
              type="number"
              placeholder="Duration (in days)"
              required
              min="1"
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="maxGroupSize"
              id="maxGroupSize"
              type="number"
              placeholder="Group Size"
              required
              min="1"
              defaultValue=""
            />
          </div>
          <div className="date_input ma-t-md">
            <svg className="icon-green icon-small icon-down booking-down">
              <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
            </svg>
            <select name="difficulty" required>
              <option defaultValue="">LEVEL</option>
              <option defaultValue="easy">EASY</option>
              <option defaultValue="medium">MEDIUM</option>
              <option defaultValue="difficult">DIFFICULT</option>
            </select>
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="price"
              id="price"
              type="number"
              placeholder="Price ($)"
              required
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="priceDiscount"
              id="priceDiscount"
              type="number"
              placeholder="Discount ($)"
              defaultValue=""
            />
          </div>
          <div className="form__group span-all-columns">
            <input
              className="form__input"
              name="summary"
              id="summary"
              type="text"
              placeholder="Summary"
              required
              defaultValue=""
            />
          </div>
          <textarea
            className="tour-description-textarea span-all-columns ma-t-md"
            rows={10}
            name="description"
            placeholder="Description"
          />
          <div className="line span-all-columns line-small">&nbsp;</div>
          <div className="start-date-container span-all-columns">
            <p className="tourform-sub-heading">Start Dates:</p>
            <div className="form__group ma-t-no">
              <input
                className="form__input"
                name="startDate"
                id="startDate"
                type="date"
                defaultValue=""
              />
            </div>
            <button type="button" className="btn-secondary">
              + Add Date
            </button>
            <div className="dates-preview">
              <div className="date-item">
                <p>Date 1: July 5, 2024</p>
                <button type="button" className="btn-secondary secondary--red">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="line span-all-columns line-small">&nbsp;</div>
          <p className="tourform-sub-heading span-all-columns">
            Start Location:
          </p>
          <div className="form__group span-all-columns">
            <input
              className="form__input"
              name="startLocDesc"
              id="startLocDesc"
              type="text"
              placeholder="Name"
              required
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="startLocLat"
              id="startLocLat"
              type="text"
              placeholder="Latitude"
              required
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="startLocLong"
              id="startLocLong"
              type="text"
              placeholder="Longitude"
              required
              defaultValue=""
            />
          </div>
          <div className="form__group span-all-columns">
            <input
              className="form__input"
              name="startLocAddress"
              id="startLocAddress"
              type="text"
              placeholder="Address"
              required
              defaultValue=""
            />
          </div>
          <div className="line span-all-columns line-small">&nbsp;</div>
          <div className="location-top span-all-columns">
            <p className="tourform-sub-heading">Tour Stops:</p>
            <button type="button" className="btn-secondary">
              + Add Location
            </button>
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locDesc"
              id="locDesc"
              type="text"
              placeholder="Name"
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locDay"
              id="locDay"
              type="number"
              placeholder="Day Number"
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locLat"
              id="locLat"
              type="text"
              placeholder="Latitude"
              defaultValue=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locLong"
              id="locLong"
              type="text"
              placeholder="Longitude"
              defaultValue=""
            />
          </div>
          <div className="location-item span-all-columns">
            <p>Stop 1: Day-2, Jon Stewart Doe (34, 23)</p>
            <button type="button" className="btn-secondary secondary--red">
              Remove
            </button>
          </div>
          <div className="line span-all-columns line-small">&nbsp;</div>
          <p className="tourform-sub-heading span-all-columns ma-bt-md">
            Tour Guides:
          </p>
          <div className="date_input ma-bt-md">
            <svg className="icon-green icon-small icon-down booking-down">
              <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
            </svg>
            <select name="leadGuide">
              <option defaultValue="">LEAD GUIDE:</option>
              <option defaultValue="5c8a21d02f8fb814b56fa189">Steve T. Scaife</option>
              <option defaultValue="5c8a21f22f8fb814b56fa18a">Aarav Lynn</option>
              <option defaultValue="5c8a22c62f8fb814b56fa18b">Miyah Myles</option>
            </select>
          </div>
          <div className="other-guides">
            <div className="date_input other-guide-input">
              <svg className="icon-green icon-small icon-down booking-down">
                <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
              </svg>
              <select name="tourGuide">
                <option defaultValue="">OTHER GUIDE:</option>
                <option defaultValue="5c8a1f292f8fb814b56fa184">Leo Gillespie</option>
                <option defaultValue="5c8a23412f8fb814b56fa18c">Ben Hadley</option>
                <option defaultValue="5c8a1f4e2f8fb814b56fa185">Jennifer Hardy</option>
                <option defaultValue="5c8a201e2f8fb814b56fa186">Kate Morrison</option>
              </select>
            </div>
            <button type="button" className="btn-secondary">
              + Add guide
            </button>
          </div>
          <div>
            <div className="guide-item">
              <p>Guide 1: Leo Gillespie</p>
              <button type="button" className="btn-secondary secondary--red">
                Remove
              </button>
            </div>
          </div>
          <div className="form__group right span-all-columns">
            <button type="submit" className="btn btn--large btn--green false">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
