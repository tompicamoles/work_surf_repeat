import { Grid, Typography, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkPlacesList from "../components/WorkPlacesList";
import { loadWorkPlaces } from "../components/workPlacesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSpots } from "../components/spotsSlice";
import { WorkPlaces } from "../components/WorkPlaces";
const Destinations = () => {
  let { id } = useParams();
  const [buttonState, setButtonState] = useState("work");

  const spot = useSelector(selectSpots)[id];
  console.log("loadedspot : ", spot);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWorkPlaces());
  }, [dispatch]);

  const handleButtonClick = (state) => {
    state === "work" ? setButtonState("work") : setButtonState("surf");
    console.log(buttonState)
  };

  return (
    <Grid container p={3} spacing={1}>
      <Grid
        item
        container
        xs={12}
        direction="column"
        justifyContent="flex-end"
        minHeight={300}
        sx={{
          backgroundSize: "cover", // Adjust the size of the background image
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <Typography
          variant="subtitle2"
          color={"primary"}
          p={3}
          sx={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.2)" }}
        >
          {" "}
          Destination submited by tom
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2"> {"Taghazout, Morocco"} </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Button
          variant="text"
          onClick={() => {
            handleButtonClick("work");
          }}
        >
          Where to work
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button variant="text" onClick={() => {
            handleButtonClick("surf");
          }}>Where to surf</Button>
      </Grid>
      {buttonState === "work" ? <WorkPlaces/> : <Typography>Yo</Typography>}
     

      
    </Grid>
  );
};

export default Destinations;
