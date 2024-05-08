import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WorkPlacesList from "../components/WorkPlacesList";
import { loadWorkPlaces } from "../components/workPlacesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSpots } from "../components/spotsSlice";

const Destinations = () => {
  let { id } = useParams();

  const spot = useSelector(selectSpots)[id];
  console.log( "loadedspot : ", spot)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWorkPlaces());
  }, [dispatch]);

  
  return (
    <Grid container>
      <Grid item xs={12}>
        Image
      </Grid>
      <Grid item xs={12}>
        <Typography> {"name"} </Typography>
      </Grid>
      <Grid item xs={12}>
        Where to work | Where to surf
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h6">Places :</Typography>
        <WorkPlacesList type="cafés" />
        <WorkPlacesList type="coworkings" />
        <WorkPlacesList type="colivings" />
      </Grid>
      <Grid item xs={5}>
        Map
      </Grid>
    </Grid>
  );
};

export default Destinations;
