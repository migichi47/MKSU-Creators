import { useNavigate } from "react-router-dom";


export default function Back(props) {
  const navigate = useNavigate();

  return(
    <div
      className="back"
      onClick={() => navigate(props.navigate)}
    >{"\u2190"} Back</div>
  );
}