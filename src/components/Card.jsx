import "../styles/card.css";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/recipe/${props.id}`);
  };

  return (
    <div onClick={navigateHandler} className="card">
      <p className="title">{props.title}</p>
      {props.image ? (
        <img src={props.image} alt={props.title} />
      ) : (
        <img src="./assets/card-placeholder.jpg" alt={props.title} />
      )}
    </div>
  );
};

export default Card;
