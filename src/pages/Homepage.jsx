import Spots from "../components/Spots.jsx";
import SpotCreationPopup from "../components/SpotCreationPopup.jsx";
import { Box, Container, Grid, Stack } from "@mui/material";
import SideBar from "../components/SideBar.jsx";
import SearchPanel from "../components/SearchPanel.jsx";

function HomePage() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid xs={12} item p={2}>
        <SearchPanel />
      </Grid>

      <Grid xs={2} item container p={2}>
        <SideBar />
      </Grid>

      <Grid xs={10} item p={2} container>
        <Spots />
      </Grid>
    </Grid>
  );
}

export default HomePage;
