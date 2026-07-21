import "./CreatorCard.css";

export function CreatorCard(props) {
  return (
    <div className="creator-card">
      <img src={props.image} />
      <div className="creator-card-text">
        <div>
          <p className="name">{props.name}</p>
        </div>
        <div className="creator-card-description">
          <p>{props.followers}k followers</p>
          <small>{'\u25CF'}</small>
          <p>Year {props.year} </p>
        </div>
      </div>
    </div>
  );
}
