import ellipsis from "../assets/images/icon-ellipsis.svg";

export default function Card({ title, current, previous, bg }) {
  const css = "bg-" + bg.replace(" ", "-").toLowerCase();

  return (
    <div className={`card ${css}`}>
      <div className="card__body">
        <div className="card__topo">
          <h2>{title}</h2>
          <button>
            <img src={ellipsis} alt="more" />
          </button>
        </div>
        <div className="card__content">
          <span className="card__content-time">{current}hrs</span>
          <span className="card__content-when">Last week - {previous}hrs</span>
        </div>
      </div>
    </div>
  );
}
