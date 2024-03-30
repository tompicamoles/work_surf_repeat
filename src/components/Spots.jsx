import React, { useState, useEffect } from "react";
import Bloc from "./SpotCard";
import {
  loadSpots,
  selectSpots,
  failedToLoadSpots,
  isLoadingSpots,
} from "./spotsSlice";
import { useDispatch, useSelector } from "react-redux";

const CardTable = (props) => {
  const dispatch = useDispatch();
  const spots = useSelector(selectSpots);
  console.log("spots in component", spots);

  useEffect(() => {
    dispatch(loadSpots());
  }, []);

  return (
    <div>
      <div className="card-container">
        
        {Object.entries(spots).map(([key, value]) => (
          <Bloc key={key} data={value} updateData={props.updateData} />
        ))}
      </div>
    </div>
  );
};

export default CardTable;
