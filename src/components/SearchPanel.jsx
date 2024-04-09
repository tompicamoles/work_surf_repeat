import { Typography, Stack, TextField } from "@mui/material";
import SpotCreationPopup from "./SpotCreationPopup";
import Search from "./Search";


const SearchPanel = () => {
  return (
    <Stack
      bgcolor="lightblue"
      direction="row"
      justifyContent="space-between"
      alignItems={"center"}
      
    >
      <Search/>
      <SpotCreationPopup/>
    </Stack>
  );
};

export default SearchPanel;
