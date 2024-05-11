import Spots from "../components/Spots.jsx";
import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import SearchPanel from "../components/SearchPanel.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar.jsx";

function HomePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filterButton, setFilterButton] = useState(false)

  const handleFilterButtonClick = () => {
    setFilterButton(filterButton ? false : true)
  }

  const spotSearch = searchParams.get("spot");

  useEffect(() => {
    if (spotSearch) {
      navigate({
        pathname: "/",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      p={2}
    >
      <Grid xs={12} item>
        <SearchPanel />
      </Grid>

      <Grid xs={12} item p={2}>
        <Button
          variant="outlined"
          fullWidth
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleFilterButtonClick}
        >
          Filters
        </Button>
      </Grid>


      <Grid
        xs={12}
        md={5}
        lg={3}
        item
        container
        p={2}
        sx={{ display: filterButton? "block" : { 
          xs : "none", 
          md: "block" } }}
      >
        <SideBar setFilterButton={setFilterButton} />
      </Grid>

      <Grid xs={12} md={7} lg={9} item p={2} container>
        <Spots />
      </Grid>
    </Grid>
  );
}

export default HomePage;
