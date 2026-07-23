import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header-section js-header-section">
        <img
          className="header-image"
          src="images/Machakos_University_Logo.png"
          alt=""
        />
        <h1 className="header-title">MKSU CREATORS AWARDS</h1>
      </div>
      <hr className="header-hr" />
    </div>
  );
}
