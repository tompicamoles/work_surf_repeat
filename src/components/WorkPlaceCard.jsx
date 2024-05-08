import { Typography, Grid, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useSelector } from "react-redux";
import { selectWorkPlaces } from "./workPlacesSlice";

function WorkPlaceCard({type, id }) {
    
    const place = useSelector(selectWorkPlaces)[type][id]
    console.log("placebis : ", place)
    

    
  return (
    <Grid container>
      <Grid item xs={3}>
      <Paper
        item
        container
        xs={12}
        sx={{
          backgroundSize: "cover", // Adjust the size of the background image
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${place.image})`,
          display: "flex",
          minHeight: 100,
          width: "100%",
        }}
      />

      </Grid>
      <Grid item container xs={6}>
        <Typography>{place.name}</Typography>
        <Grid item container>
          <LocationOnIcon />
          <Typography multiline={true}> {place.adress}</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={3}>
        <Grid item xs={6}>
          {place.rating}
        </Grid>
        <Grid item xs={6}>
          XXX
        </Grid>
        <Grid item xs={12}>
          by: {place.submitedBy}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WorkPlaceCard;
