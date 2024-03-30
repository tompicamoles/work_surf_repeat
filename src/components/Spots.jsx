import React, { useState, useEffect } from 'react';
import Bloc from "./SpotCard"
import { loadSpots, selectSpots, failedToLoadSpots, isLoadingSpots } from './spotsSlice';
import { useDispatch, useSelector } from "react-redux";




const CardTable = (props) => {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadSpots())


  }, [])

    
  
  
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


