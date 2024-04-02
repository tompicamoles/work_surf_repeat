import React, { useState, useEffect } from "react";
import SpotCard from "./SpotCard";
import {
  loadSpots,
  selectSpots,
  failedToLoadSpots,
  isLoadingSpots,
} from "./spotsSlice";
import { useDispatch, useSelector } from "react-redux";

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(selectSpots);
  console.log("spots in component", spots);

  useEffect(() => {
    dispatch(loadSpots());
  }, []);

  return (
    <div>
      <div className="card-container">
        
        {Object.entries(spots).map(([id]) => (
          <SpotCard id={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Spots;
