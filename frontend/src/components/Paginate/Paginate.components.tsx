export default function Paginate() {
  return (
    <div className="paginate">
      <button type="button" className="btn-hidden">
        <svg className="icon-small icon-green">
          <use xlinkHref="/img/icons.svg#icon-arrow-left"></use>
        </svg>
      </button>
      <button type="button" className="btn-active false">
        1
      </button>
      <button type="button" className="false false">
        2
      </button>
      <button className="" type="button">
        <svg className="icon-small icon-green">
          <use xlinkHref="/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
}
