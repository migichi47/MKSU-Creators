import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header-section js-header-section">
        <img
          className="header-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN-ym3nfLTARYaYOaAr5gEL0pHcpAHGqYqiFQcsF6ZL2OLgmt-hGmx-k&s=10"
          alt=""
        />
        <h1 className="header-title">MKSU CREATORS AWARDS</h1>
      </div>
      <hr className="header-hr" />
    </div>
  );
}
