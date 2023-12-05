import React, { useState, useEffect } from 'react';
import Bloc from "./card.js"





const CardTable = ({cards}) => {
    
  
  
    return (
      <div>
        <div className="card-container">
          {cards.map((card, index) => (
            <Bloc key={index} data={card} />
          ))}
        </div>
      </div>
    );
  };

  export default CardTable


