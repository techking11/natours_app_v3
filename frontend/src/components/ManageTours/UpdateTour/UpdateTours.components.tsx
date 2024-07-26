import { Link } from "react-router-dom";

export default function UpdateTour() {
  return (
    <div className="user-view__content">
      <div className="user-view__back-link">
        <Link
          className="back-link"
          to="/manage/tours"
        >
          <svg className="icon-small icon-back">
            <use xlinkHref="/img/icons.svg#icon-arrow-left"></use>
          </svg>
        </Link>
      </div>
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md undefined">Update tour</h2>
        <form className="form-create-tour">
          <div className="form__photo-upload span-all-columns">
            <p className="tourform-sub-heading ma-r-sm">Tour Cover Image:</p>
            <input
              className="form__upload"
              name="imageCover"
              id="imageCover"
              type="file"
              accept="image/*"
            />
            <label className="form__label ma-r-lg" htmlFor="imageCover">
              Choose Single
            </label>
            <div className="image-button-container ma-r-sm">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1690124240/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690124240396-cover.jpg"
                alt="Tour cover 1"
              />
              <button type="button">
                <svg className="icon-delete icon-small icon-white">
                  <use xlinkHref="/img/icons.svg#icon-x"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="form__group form__photo-upload span-all-columns">
            <p className="tourform-sub-heading ma-r-sm">
              Other Tour Images (Maximum 3):
            </p>
            <input
              className="form__upload"
              name="images"
              id="images"
              type="file"
              accept="image/*"
              multiple
            />
            <label className="form__label" htmlFor="images">
              Choose Multiple
            </label>
          </div>
          <div className="span-all-columns ma-t-md flex">
            <div className="image-button-container ma-r-sm">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1690128816/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690128816255-2.jpg"
                alt="Tour cover 2"
              />
              <button type="button">
                <svg className="icon-delete icon-small icon-white">
                  <use xlinkHref="/img/icons.svg#icon-x"></use>
                </svg>
              </button>
            </div>
            <div className="image-button-container ma-r-sm">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1690128816/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690128816357-1.jpg"
                alt="Tour cover 3"
              />
              <button type="button">
                <svg className="icon-delete icon-small icon-white">
                  <use xlinkHref="/img/icons.svg#icon-x"></use>
                </svg>
              </button>
            </div>
            <div className="image-button-container ma-r-sm">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1690128879/natours-tours/tour-64bd36868b4c62a9cb577d8b-1690128879273-1.jpg"
                alt="Tour cover 4"
              />
              <button type="button">
                <svg className="icon-delete icon-small icon-white">
                  <use xlinkHref="/img/icons.svg#icon-x"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="line span-all-columns line-small">&nbsp;</div>
          <p className="tourform-sub-heading span-all-columns">Tour Details:</p>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="name"
              id="name"
              type="text"
              placeholder="Tour Name"
              required
              value="The Mountain Biker"
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
              value="15"
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
              value="20"
            />
          </div>
          <div className="date_input ma-t-md">
            <svg className="icon-green icon-small icon-down booking-down">
              <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
            </svg>
            <select name="difficulty" required>
              <option value="">LEVEL</option>
              <option value="easy">EASY</option>
              <option value="medium">MEDIUM</option>
              <option value="difficult">DIFFICULT</option>
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
              value="649"
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="priceDiscount"
              id="priceDiscount"
              type="number"
              placeholder="Discount ($)"
              value=""
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
              value="Riding bicycles often over rough terrain in Manali-Leh in chilling winter"
            />
          </div>
          <textarea
            className="tour-description-textarea span-all-columns ma-t-md"
            rows={10}
            name="description"
            placeholder="Description"
          >
            Arguably the most exciting and dreaded mountain biking trail in
            India, the Manali-Leh trail takes you through the best of the
            Himalayas. Starting from Manali, the route stretches over the
            Himalayas and spans up to Khardungla- the highest motorable road in
            the world. The fact that this trail traverses some of the most
            grueling passes of the Lesser Himalayas along with the colossal
            nature in the backdrop, makes it one of the most challenging rides
            to accomplish. Dare to complete it at least once in a lifetime and
            live to narrate the stories of real thrill. This is the best place
            htmlFor mountain biking in India.
          </textarea>
          <div className="line span-all-columns line-small">&nbsp;</div>
          <div className="start-date-container span-all-columns">
            <p className="tourform-sub-heading">Start Dates:</p>
            <div className="form__group ma-t-no">
              <input
                className="form__input"
                name="startDate"
                id="startDate"
                type="date"
                value=""
              />
            </div>
            <button type="button" className="btn-secondary">
              + Add Date
            </button>
            <div className="dates-preview">
              <div className="date-item">
                <p>Date 1: September 22, 2023</p>
                <button type="button" className="btn-secondary secondary--red">
                  Remove
                </button>
              </div>
              <div className="date-item">
                <p>Date 2: December 15, 2023</p>
                <button type="button" className="btn-secondary secondary--red">
                  Remove
                </button>
              </div>
              <div className="date-item">
                <p>Date 3: February 5, 2024</p>
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
              value="Manali, IND"
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
              value="32.2395067"
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
              value="77.1665201"
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
              value="Tibetan colony rohtang road, Manali, Himachal Pradesh 175131"
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
              value=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locDay"
              id="locDay"
              type="number"
              placeholder="Day Number"
              value=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locLat"
              id="locLat"
              type="text"
              placeholder="Latitude"
              value=""
            />
          </div>
          <div className="form__group undefined">
            <input
              className="form__input"
              name="locLong"
              id="locLong"
              type="text"
              placeholder="Longitude"
              value=""
            />
          </div>
          <div className="location-item span-all-columns">
            <p>Stop 1: Day-1, Manali Bikerz Point (77.1897726, 32.249414)</p>
            <button type="button" className="btn-secondary secondary--red">
              Remove
            </button>
          </div>
          <div className="location-item span-all-columns">
            <p>Stop 2: Day-3, Temple of Marhi (77.2150039, 32.3487374)</p>
            <button type="button" className="btn-secondary secondary--red">
              Remove
            </button>
          </div>
          <div className="location-item span-all-columns">
            <p>Stop 3: Day-6, Zing Zing Bar (77.3172658, 32.7913784)</p>
            <button type="button" className="btn-secondary secondary--red">
              Remove
            </button>
          </div>
          <div className="location-item span-all-columns">
            <p>Stop 4: Day-10, Tso Kar (77.9527594, 33.3114948)</p>
            <button type="button" className="btn-secondary secondary--red">
              Remove
            </button>
          </div>
          <div className="location-item span-all-columns">
            <p>Stop 5: Day-13, Leh (77.4843362, 34.1663762)</p>
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
              <option value="">LEAD GUIDE:</option>
              <option value="5c8a21d02f8fb814b56fa189">Steve T. Scaife</option>
              <option value="5c8a21f22f8fb814b56fa18a">Aarav Lynn</option>
              <option value="5c8a22c62f8fb814b56fa18b">Miyah Myles</option>
            </select>
          </div>
          <div className="other-guides">
            <div className="date_input other-guide-input">
              <svg className="icon-green icon-small icon-down booking-down">
                <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
              </svg>
              <select name="tourGuide">
                <option value="">OTHER GUIDE:</option>
                <option value="5c8a1f292f8fb814b56fa184">Leo Gillespie</option>
                <option value="5c8a23412f8fb814b56fa18c">Ben Hadley</option>
                <option value="5c8a1f4e2f8fb814b56fa185">Jennifer Hardy</option>
                <option value="5c8a201e2f8fb814b56fa186">Kate Morrison</option>
              </select>
            </div>
            <button type="button" className="btn-secondary">
              + Add guide
            </button>
          </div>
          <div>
            <div className="guide-item">
              <p>Guide 1: Ben Hadley</p>
              <button type="button" className="btn-secondary secondary--red">
                Remove
              </button>
            </div>
            <div className="guide-item">
              <p>Guide 2: Kate Morrison</p>
              <button type="button" className="btn-secondary secondary--red">
                Remove
              </button>
            </div>
          </div>
          <div className="form__group right span-all-columns">
            <button type="submit" className="btn btn--large btn--green false">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
