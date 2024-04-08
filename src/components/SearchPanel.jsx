import { Typography, Stack } from "@mui/material"
import SpotCreationPopup from "./SpotCreationPopup"



const SearchPanel = () => {
    return (
        <Stack bgcolor="lightblue" direction="row" justifyContent="space-between">
            <Typography>Search</Typography>
           
      <SpotCreationPopup></SpotCreationPopup>
        </Stack>
        
    )
}

export default SearchPanel