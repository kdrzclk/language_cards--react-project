import { useState } from "react";

const Card = ({ cardName, cardImg, cardOptions }) => {
  const [appear, setappear] = useState(true);

  const appearContent = () => {
    setappear(!appear);
  };

  return (
    <div className="card">
      {appear ? (
        <div className="card-img" onClick={appearContent}>
          <img src={cardImg} alt={cardName} />
          <h5 className="card-title">{cardName}</h5>
        </div>
      ) : (
        <div className="card2" onClick={appearContent}>
          <ul>
            {cardOptions.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
