import React  from "react";
import SpotCard from "./SpotCard";
import {
  selectSpots,
} from "./spotsSlice";
import {  useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import {  useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";



const Spots = ({context}) => {
  const { user } = useAuth0();
  console.log("love")

  let spots = useSelector(selectSpots);

  console.log("spots in component", spots);

  const [searchParams] = useSearchParams();

  const spotSearch = searchParams.get("spot");

  function filterSpotsByNameOrCountry() {
    let filteredSpots = {};

    // Iterate over the keys of the spots object
    for (let key in spots) {
      console.log(key);
      // Check if the search parameter is included in the name or country
      if (
        spots[key].name.toLowerCase().includes(spotSearch.toLowerCase()) ||
        spots[key].country.toLowerCase().includes(spotSearch.toLowerCase())
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
    spots = filterSpotsByNameOrCountry( );
  }

  function filterLikedSpots() {
    let filteredSpots = {};

    // Iterate over the keys of the spots object
    for (let key in spots) {
      console.log(key);
      // Check if the search parameter is included in the name or country
      if (
        spots[key].likes.includes(user.sub)
      ) {
        // If it matches, add the spot to the filteredSpots array
        console.log(key, "is liked by user");
        filteredSpots[key] = spots[key];
      }
    }
    console.log(filteredSpots);
    return filteredSpots;
  }

  if (context === "likedSpots") {
    spots = filterLikedSpots();
  }



  
  return (
    <Grid
      id="spotsGrid"
      container
      direction="row"
      
    >

      {Object.entries(spots).length === 0 ? (<Typography variant="body">0 spots</Typography>) : Object.entries(spots).map(([id]) => (
        <Grid
        item
        container
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        p={0.5}
        sx={{
          width: "100%",
          minHeight: 250,
          maxHeight: 300,
        }}
      ><SpotCard id={id} key={id} /> </Grid>
      )
    )}
      
    </Grid>
  );
};

export default Spots;
