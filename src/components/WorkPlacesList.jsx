import { Typography, Grid } from "@mui/material";
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
      <Grid container>
        <Grid xs={9} item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography> show more</Typography>
        </Grid>
        {Object.entries(workPlaces).map(([id]) => (
          <WorkPlaceCard  type={type} id={id} />
        ))}
      </Grid>
    );
  }
}

export default WorkPlacesList;
