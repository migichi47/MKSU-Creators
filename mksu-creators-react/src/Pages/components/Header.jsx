import { useNavigate } from "react-router-dom";
import "./Header.css";

export function Header(props) {
  const navigate = useNavigate()
  const voteCount = props.voteCount;
  
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
      <div>
        <div className="confirm-votes">
          <div className="vote-count">{voteCount}</div>
          <p>votes</p>
          <button onClick={() => navigate("/your-votes")}>confirm</button>
        </div>
      </div>
      <hr className="header-hr" />
    </div>
  );
}
