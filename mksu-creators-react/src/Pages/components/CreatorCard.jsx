import "./CreatorCard.css";

export function CreatorCard() {
  return (
    <div className="creator-card">
      <img src="images/WhatsApp Image 2026-04-21 at 2.53.05 PM (1).jpeg" />
      <div className="creator-card-text">
        <div>
          <p className="name">Migichi</p>
        </div>
        <div className="creator-card-description">
          <p>3k followers</p>
          <small>{'\u25CF'}</small>
          <p>Year 2 </p>
        </div>
      </div>
    </div>
  );
}
