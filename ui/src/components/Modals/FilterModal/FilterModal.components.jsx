export default function FilterModal({ openModal }) {

  return (
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
                <option defaultValue="">All</option>
                <option defaultValue="difficult">Difficult</option>
                <option defaultValue="medium">Medium</option>
                <option defaultValue="easy">Easy</option>
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
                <option defaultValue="0">All</option>
                <option defaultValue="4">&gt;= 4.0</option>
                <option defaultValue="3">&gt;= 3.0</option>
                <option defaultValue="2">&gt;= 2.0</option>
                <option defaultValue="1">&gt;= 1.0</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="form__group right">
        <button type="button" className="btn btn--small btn--green" onClick={openModal}>
          Done
        </button>
      </div>
    </div>
  );
}
