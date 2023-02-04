import pic from "../assets/images/image-jeremy.png";

export default function Profile({ setFilter, filter }) {
  const isActive = (str) => str === filter;

  return (
    <div className="profile">
      <div className="profile__topo">
        <img src={pic} alt="Jeremy Robson" />
        <h1>
          <span>Report for</span>
          <span>
            Jeremy
            <br /> Robson
          </span>
        </h1>
      </div>
      <div className="profile__bottom">
        <button
          className={isActive("daily") ? "active" : null}
          onClick={() => setFilter("daily")}
        >
          Daily
        </button>
        <button
          className={isActive("weekly") ? "active" : null}
          onClick={() => setFilter("weekly")}
        >
          Weekly
        </button>
        <button
          className={isActive("monthly") ? "active" : null}
          onClick={() => setFilter("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
