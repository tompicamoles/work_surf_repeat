import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  loadWorkPlaces,
  selectWorkPlaces,
} from "../components/workPlacesSlice";
import { useDispatch, useSelector } from "react-redux";

const Destinations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWorkPlaces());
  }, [dispatch]);

  let workPlaces = useSelector(selectWorkPlaces);
  console.log("workplaces:", workPlaces);

  

  let { id } = useParams();

  

  return (
    <Grid container>
      <Grid item xs={12}>
        Image
      </Grid>
      <Grid item xs={12}>
        <Typography> {id} </Typography>
      </Grid>
      <Grid item xs={12}>
        {" "}
        Where to work | Where to surf
      </Grid>
      <Grid item xs={6}>
        {" "}
        places
      </Grid>
      <Grid item xs={6}>
        Map
      </Grid>
    </Grid>
  );
};

export default Destinations;
