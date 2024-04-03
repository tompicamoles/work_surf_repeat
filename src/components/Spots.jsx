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
  
     

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Object.entries(spots).map(([id]) => (
            <Grid item xs={6} md={3} >
              <SpotCard id={id} key={id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    
  );
};

export default Spots;
