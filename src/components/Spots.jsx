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

import { useNavigate, useSearchParams } from "react-router-dom";

const Spots = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let spots = useSelector(selectSpots);

  console.log("spots in component", spots);

  const [searchParams] = useSearchParams();

  const spotSearch = searchParams.get("spot");

  function filterSpotsByNameOrCountry(spots, searchParam) {
    let filteredSpots = {};

    // Iterate over the keys of the spots object
    for (let key in spots) {
      console.log(key);
      // Check if the search parameter is included in the name or country
      if (
        spots[key].name.toLowerCase().includes(searchParam.toLowerCase()) ||
        spots[key].country.toLowerCase().includes(searchParam.toLowerCase())
      ) {
        // If it matches, add the spot to the filteredSpots array
        console.log(key, "is matching search");
        filteredSpots[key] = spots[key];
      }
    }
    console.log(filteredSpots);
    return filteredSpots;
  }

  if (spotSearch) {
    spots = filterSpotsByNameOrCountry(spots, spotSearch);
  }

  useEffect(() => {
    dispatch(loadSpots());

    if (spotSearch) {
      navigate({
        pathname: "/",
      });
    }
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
