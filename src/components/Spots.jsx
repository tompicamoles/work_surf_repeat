import React  from "react";
import SpotCard from "./SpotCard";
import {
  selectSpots,
} from "./spotsSlice";
import {  useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import {  useSearchParams } from "react-router-dom";

const Spots = () => {
  
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



  
  return (
    <Grid
      id="spotsGrid"
      container
      direction="row"
      
    >
      {Object.entries(spots).map(([id]) => (
        <SpotCard id={id} key={id} />
      ))}
    </Grid>
  );
};

export default Spots;
