import React, { useState, useEffect } from 'react';
import Bloc from "./card.js"





const CardTable = (props) => {
    
  
  
    return (
      <div>
        <div className="card-container">
          {props.cards.map((card, index) => (
            <Bloc key={index} data={card} updateData={props.updateData} />
          ))}
        </div>
      </div>
    );
  };

  export default CardTable


