import Spots from "../components/Spots.jsx";
import SpotCreationPopup from "../components/SpotCreationPopup.jsx";
import { Box, Container, Grid, Stack } from "@mui/material";
import SideBar from "../components/SideBar.jsx";
import SearchPanel from "../components/SearchPanel.jsx";

function HomePage() {
  return (
    <Stack id="homepage" container  direction="row" spacing={2} p={3}>
      <SideBar />
      <Stack flex={7} spacing={2} >
        <SearchPanel />
        <Spots />
        
      </Stack>
    </Stack>
  );
}

export default HomePage;
