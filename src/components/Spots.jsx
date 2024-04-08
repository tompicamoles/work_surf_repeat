import React, { useState, useEffect } from "react";
import SpotCard from "./SpotCard";
import {
  loadSpots,
  selectSpots,
  failedToLoadSpots,
  isLoadingSpots,
} from "./spotsSlice";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(selectSpots);
  console.log("spots in component", spots);

  useEffect(() => {
    dispatch(loadSpots());
  }, []);

  return (

    <Grid
      id="spotsGrid"
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      
    >
      {Object.entries(spots).map(([id]) => (
       
          <SpotCard id={id} key={id} />
        
      ))}
    </Grid>
  );
};

export default Spots;
