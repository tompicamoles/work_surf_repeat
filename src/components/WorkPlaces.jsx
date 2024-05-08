import { Grid } from "@mui/material";
import WorkPlacesList from "./WorkPlacesList";

export const WorkPlaces = () => {
  return (
    <>
      <Grid item xs={7}>
        <WorkPlacesList type="cafés" />
        <WorkPlacesList type="coworkings" />
        <WorkPlacesList type="colivings" />
      </Grid>
      <Grid
        item
        container
        xs={5}
        sx={{
          backgroundSize: "cover", // Adjust the size of the background image
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg)`,
          display: "flex",
          minHeight: 100,
          width: 150,
        }}
      ></Grid>
    </>
  );
};
