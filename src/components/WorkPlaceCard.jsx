import { Typography, Grid, Paper, Fab, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import { useSelector } from "react-redux";
import { selectWorkPlaces } from "./workPlacesSlice";

function WorkPlaceCard({ type, id }) {
  const place = useSelector(selectWorkPlaces)[type][id];
  const numberOfLikes = place.likes.length
  
  console.log("num likes for : ", place.name , place.likes ,numberOfLikes)
  


  return (
    <Grid id="place" container item p={2} spacing={1} xs={12} width="100%">
      <Grid item sm={3} sx={{display: { xs: 'none', sm: 'block' }}}>
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
            width: 150,
            
          }}
        />
      </Grid>
      <Grid item container xs={8} sm={6} id="nameAndAdress">
        <Typography variant="h6">{place.name}</Typography>
        <Grid item container xs={12} alignItems="center">
          <Grid item xs={1}>
            {" "}
            <LocationOnIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography multiline={true}> {place.adress}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={4} sm={3}>
        <Grid item xs={6}>
          <Typography variant="h6">{place.rating} / 5</Typography>
        </Grid>
        <Grid
          item
          container
          xs={6}
          alignItems="flex-end"
          justifyContent={"flex-start"}
          direction={"column"}
        >
          <Fab size="medium" color="secondary" aria-label="add">
            <ThumbUpAltIcon color="primary" />
            <Typography marginLeft={-1} marginTop={2.5} color="black">
              {numberOfLikes}
            </Typography>
          </Fab>
        </Grid>
        <Typography variant="subtitle"> by tom</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default WorkPlaceCard;
