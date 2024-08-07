export default function ReviewsModal() {
  return (
    <div className="reviews__modal--container" style={{ display: 'none' }}>
      <div id="alert-modal-hook"></div>
      <div id="backdrop-hook"><div className="backdrop"></div></div>
      <div id="modal-hook">
        <div className="review-modal modal-outer-container">
          <h2 className="heading-secondary ma-bt-md undefined">
            The Sea Explorer
          </h2>
          <div className="modal-inner-container">
            <div className="bars-container">
              <div>
                <div className="bar-inner">
                  <p>5</p>
                  <div className="bar">
                    <div
                      className="bar-color-5"
                      style={{ width: "71.4286px", height: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bar-inner">
                  <p>4</p>
                  <div className="bar">
                    <div
                      className="bar-color-4"
                      style={{ width: "28.5714px", height: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bar-inner">
                  <p>3</p>
                  <div className="bar">
                    <div
                      className="bar-color-3"
                      style={{ width: "0px", height: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bar-inner">
                  <p>2</p>
                  <div className="bar">
                    <div
                      className="bar-color-2"
                      style={{ width: "0px", height: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bar-inner">
                  <p>1</p>
                  <div className="bar">
                    <div
                      className="bar-color-1"
                      style={{ width: "0px", height: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="average_details">
                <svg className="icon-large icon-green">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <h3>4.7 out of 5</h3>
                <p>(7 Reviews) </p>
              </div>
              <div className="rating-filter">
                <div className="input-select-container">
                  <label htmlFor="input-select-label">rating:</label>
                  <div className="input-select">
                    <svg className="icon-green icon-small icon-down">
                      <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
                    </svg>
                    <select id="rating" name="rating">
                      <option value="">All</option>
                      <option value="5">5 Star</option>
                      <option value="4">4 Star</option>
                      <option value="3">3 Star</option>
                      <option value="2">2 Star</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-modal-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589438/natours-users/user-5c8a1dfa2f8fb814b56fa181-1686589434784.jpg"
                alt="Lourdes Browning"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>Lourdes Browning</h3>
                <p>Reviewed: July 2023</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: July 2022</p>
              </div>
            </div>
            <p className="review-modal-review">
              Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros
              condimentum scelerisque taciti mattis praesent feugiat eu nascetur a
              tincidunt
            </p>
            <p className="liked_text">3 people found this helpful</p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
            <div className="review-modal-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686594510/natours-users/user-5c8a1e1a2f8fb814b56fa182-1686594510236.jpg"
                alt="Sophie Louise Hart"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>Sophie Louise Hart</h3>
                <p>Reviewed: July 2023</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: July 2022</p>
              </div>
            </div>
            <p className="review-modal-review">
              Pulvinar taciti etiam aenean lacinia natoque interdum fringilla
              suspendisse nam sapien urna!
            </p>
            <p className="liked_text"></p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
            <div className="review-modal-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589601/natours-users/user-5c8a211f2f8fb814b56fa188-1686589597153.jpg"
                alt="Cristian Vega"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>Cristian Vega</h3>
                <p>Reviewed: July 2023</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: September 2022</p>
              </div>
            </div>
            <p className="review-modal-review">
              Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit
              ultricies dapibus
            </p>
            <p className="liked_text"></p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
            <div className="review-modal-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589693/natours-users/user-5c8a23c82f8fb814b56fa18d-1686589689297.jpg"
                alt="Laura Wilson"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>Laura Wilson</h3>
                <p>Reviewed: July 2023</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: September 2022</p>
              </div>
            </div>
            <p className="review-modal-review">
              Blandit varius nascetur est felis praesent lorem himenaeos pretium
              dapibus tellus bibendum consequat ac duis
            </p>
            <p className="liked_text"></p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
            <div className="review-modal-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589712/natours-users/user-5c8a23de2f8fb814b56fa18e-1686589708530.jpg"
                alt="Max Smith"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>Max Smith</h3>
                <p>Reviewed: July 2023</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: July 2022</p>
              </div>
            </div>
            <p className="review-modal-review">
              Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt
              natoque ipsum est.
            </p>
            <p className="liked_text"></p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
            <div className="review-modal-item">
              <img
                src="https://res.cloudinary.com/dfokabou4/image/upload/v1686589782/natours-users/user-5c8a24822f8fb814b56fa192-1686589777751.jpg"
                alt="John Riley"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>John Riley</h3>
                <p>Reviewed: July 2023</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-5">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: March 2023</p>
              </div>
            </div>
            <p className="review-modal-review">
              Magna magnis tellus dui vivamus donec placerat vehicula erat turpis
            </p>
            <p className="liked_text"></p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
            <div className="review-modal-item">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocLrvnOGttF7oY8P8YacNpszxdQA0CEVqYoP5W_cBqfGuNnEiA=s96-c"
                alt="amaan shaikh"
                className="item_user_photo"
              />
              <div className="review-modal-user">
                <h3>amaan shaikh</h3>
                <p>Reviewed: March 2024</p>
              </div>
              <div className="review-modal-booking">
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-color-4">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <svg className="icon-small undefined icon-inactive">
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
                <p>Tour Date: August 2023</p>
              </div>
            </div>
            <p className="review-modal-review">Amazing Experience.</p>
            <p className="liked_text"></p>
            <div className="btn-likes-container">
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-up"></use>
                </svg>
              </button>
              <button type="button" className="btn-likes">
                <svg className="icon-small icon-dark">
                  <use xlinkHref="/img/icons.svg#icon-thumbs-down"></use>
                </svg>
              </button>
            </div>
            <div className="line line-small">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
