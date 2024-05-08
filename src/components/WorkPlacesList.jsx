import { Typography, Grid, Button } from "@mui/material";
import WorkPlaceCard from "./WorkPlaceCard";
import { selectWorkPlaces } from "./workPlacesSlice";
import { useSelector } from "react-redux";

function WorkPlacesList({ type }) {
  const workPlaces = useSelector(selectWorkPlaces)[type];
  
  const titles = {
    cafés: "Laptop-friendly cafés",
    coworkings: "Coworking Spaces",
    colivings: "Colivings",
  };

  let title = titles[type];
  console.log(type, workPlaces);

  if (!workPlaces) {
    return <div>loading</div>;
  } else {
    return (
      <Grid id="placesList" container marginTop={2} spacing="1" justifyContent="space-between" >
        <Grid xs={9} item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item container xs={3} justifyContent={"flex-end"} >
        <Button variant="text">Show more</Button>

        </Grid>

        {Object.entries(workPlaces).map(([id]) => (
          <WorkPlaceCard  type={type} id={id} />
        ))}
      </Grid>
    );
  }
}

export default WorkPlacesList;
