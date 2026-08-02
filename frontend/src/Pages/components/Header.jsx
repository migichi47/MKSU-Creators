import { useNavigate } from "react-router-dom";
import "./Header.css";

export function Header(props) {
  const { description } = props;
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-section js-header-section">
        <img
          className="header-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN-ym3nfLTARYaYOaAr5gEL0pHcpAHGqYqiFQcsF6ZL2OLgmt-hGmx-k&s=10"
          alt=""
          onClick={() => navigate("/")}
        />
        <h1 className="header-title">MKSU CREATORS AWARDS</h1>
        <h6 className="header-description">{description}</h6>
      </div>
      <hr className="header-hr" />
    </div>
  );
}
