import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);

    const query = createSearchParams({ spot: value });

    if (value !== "") {
      navigate({
        pathname: "/:search",
        search: `?${query}`,
      });
    } else {
      navigate({
        pathname: "/",
      });
    }
  };

  return (
    <TextField
    variant="filled"

      sx={{
        '& .MuiFilledInput-root': {
          backgroundColor: 'white', // Set the background color of the input area to white
        },
      }}
      fullWidth
      value={search}
      onChange={handleChange}
    ></TextField>
  );
};

export default Search;
