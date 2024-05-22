import { Typography, Grid, Button, Divider } from "@mui/material";
import WorkPlaceCard from "./WorkPlaceCard";
import { selectWorkPlaces } from "./workPlacesSlice";
import { useSelector } from "react-redux";

function WorkPlacesList({ type }) {
  const workPlaces = useSelector(selectWorkPlaces)[type];

  const titles = {
    café: "Laptop-friendly cafés",
    coworking: "Coworking Spaces",
    coliving: "Colivings",
  };

  let title = titles[type];
  console.log(type, workPlaces);

  if (!workPlaces) {
    <Typography p={3} variant="h6">
      
      Loading...
    </Typography>;
  } else if (Object.keys(workPlaces).length === 0) {
    return (
      <Grid container p={2}>
        <Typography variant="h6" paddingBottom={1}>
          
          Be first to recommand {title}.
        </Typography>
        <Grid item xs={12}>
          
          <Divider />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        id="placesList"
        container
        marginTop={2}
        spacing="1"
        justifyContent="space-between"
      >
        <Grid xs={8} sm={9} item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item container xs={4} sm={3} justifyContent={"flex-end"}>
          <Button variant="text">Show more</Button>
        </Grid>

        {Object.entries(workPlaces).map(([id]) => (
          <WorkPlaceCard type={type} id={id} />
        ))}
      </Grid>
    );
  }
}

export default WorkPlacesList;
