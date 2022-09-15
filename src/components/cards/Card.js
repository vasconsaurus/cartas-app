import React, { useState } from "react";

function Card({cardName, cardText}) {

  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? 'flip' : ''}`}>
      <div className="front" onClick={() => setFlip(!flip)}>
        <h3>click me</h3>
      </div>
      <div className="back" onClick={() => setFlip(!flip)}>
        <h3>{cardName}</h3>
        <p>{cardText}</p>
      </div>
    </div>
  );
}

export default Card;
