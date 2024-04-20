import { Typography, Stack } from "@mui/material";
import SpotCreationPopup from "./SpotCreationPopup";
import Search from "./Search";

const SearchPanel = () => {
  return (
    <Stack
      bgcolor="lightblue"
      direction="column"
      justifyContent="center"
      alignItems={"center"}
      minHeight={400}
      spacing={2}
      sx={{
        backgroundSize: "cover", // Adjust the size of the background image
        backgroundPosition: "bottom", // Center the background image
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://images.unsplash.com/photo-1526342122811-2a9c8512023d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <Typography
        variant="h1"
        color="white"
        sx={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)" }}
      >
        
        Work Surf Repeat
      </Typography>
      <Typography
        variant="h5"
        color="white"
        sx={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)" }}
      >
        Find Your Remote Work Oasis And Surf Heaven - Powered by Community
      </Typography>
      <Stack
        id="searchBar"
        sx={{ width: "80%", maxWidth: 700 }}
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems={"center"}
        p={5}
      >
        <Search />
        <SpotCreationPopup />
      </Stack>
    </Stack>
  );
};

export default SearchPanel;
