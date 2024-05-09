import Spots from "../components/Spots.jsx";
import React, { useEffect } from "react";
import { Grid} from "@mui/material";
import SearchPanel from "../components/SearchPanel.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";



function HomePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();

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
    >
      <Grid xs={12} item p={2}>
        <SearchPanel />
      </Grid>

      {/* <Grid xs={2} item container p={2}>
        <SideBar />
      </Grid> */}

      <Grid xs={12} item p={2} container>
        <Spots />
      </Grid>
    </Grid>
  );
}

export default HomePage;
