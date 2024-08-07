export default function FilterModal() {

  return (
    <div className='filter__modal--container hidden' >
      <div id="alert-modal-hook"></div>
      <div id="backdrop-hook">
        <div className="backdrop"></div>
      </div>
      <div id="modal-hook">
        <div className="filter-modal">
          <h2 className="heading-secondary ma-bt-md undefined">Filter</h2>
          <div className="filter-modal-inner">
            <div className="filter-modal-inner">
              <div className="input-select-container">
                <label htmlFor="input-select-label">difficulty:</label>
                <div className="input-select">
                  <svg className="icon-green icon-small icon-down">
                    <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
                  </svg>
                  <select id="difficulty" name="difficulty">
                    <option value="">All</option>
                    <option value="difficult">Difficult</option>
                    <option value="medium">Medium</option>
                    <option value="easy">Easy</option>
                  </select>
                </div>
              </div>
              <div className="input-select-container">
                <label htmlFor="input-select-label">rating:</label>
                <div className="input-select">
                  <svg className="icon-green icon-small icon-down">
                    <use xlinkHref="/img/icons.svg#icon-chevron-down"></use>
                  </svg>
                  <select id="rating" name="rating">
                    <option value="0">All</option>
                    <option value="4">&gt;= 4.0</option>
                    <option value="3">&gt;= 3.0</option>
                    <option value="2">&gt;= 2.0</option>
                    <option value="1">&gt;= 1.0</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form__group right">
            <button type="button" className="btn btn--small btn--green">
              Done
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
