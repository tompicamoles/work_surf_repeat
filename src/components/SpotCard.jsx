import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSpots } from "./spotsSlice";
import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
  Checkbox,
  Link,
  Chip,
  Fab,
} from "@mui/material";
import {
  Wifi,
  AttachMoney,
  BeachAccess,
  AcUnit,
  LaptopMac,
  House,
  Favorite,
} from "@mui/icons-material";
import { GiMapleLeaf, GiSprout } from "react-icons/gi";
import { FaSun, FaSnowman } from "react-icons/fa";

import { GiWaveSurfer } from "react-icons/gi";

function SpotCard({ id }) {
  const spot = useSelector(selectSpots)[id];

  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      md={4}
      lg={3}
      p={0.5}
      sx={{
        width: "100%",
        minHeight: 250,
      }}
    >
      <Paper
        item
        container
        xs={12}
        sx={{
          backgroundSize: "cover", // Adjust the size of the background image
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${spot.image})`,
          display: "flex",

          minHeight: 200,
          width: "100%",
        }}
      >
        <Grid container p={2}>
          <Grid item container xs={6}>
            <Box
              sx={{
                height: "20%",
                borderRadius: 1.5,
                p: 1,
                bgcolor: "lightyellow",
                m: 0.5,
                display:"flex",
                alignItems:"center",
              }}
            >
              {spot.hasCoworking ? (
                <LaptopMac fontSize="small" color="primary" />
              ) : (
                <LaptopMac color="disabled" fontSize="small" />
              )}
            </Box>

            <Box
              sx={{
                height: "20%",
                borderRadius: 1.5,
                p: 1,
                bgcolor: "lightyellow",
                m: 0.5,
                display:"flex",
                alignItems:"center",
              }}
            >
              {spot.hasColiving ? (
                <House fontSize="small" color="primary" />
              ) : (
                <House color="disabled" fontSize="small" />
              )}
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignContent={"flex-start"}
            justifyContent="flex-end"
          >
            <Fab size="small" color="secondary">
              <Favorite />
            </Fab>
          </Grid>
          <Grid
            container
            item
            xs={6}
            alignContent={"flex-end"}
            justifyContent="flex-start"
          >
            <Box
              sx={{
                display:"flex",
                alignItems:"center",
                height: "15%",
                borderRadius: 1.5,
                p: 1,
                bgcolor: "lightyellow",
                m: 0.5,
              }}
            >
              <FaSun size={20} color={ spot.surfSeason.includes("June" || "July" || "August") ? "blue" : "grey"} />
              <GiMapleLeaf size={20} color={ spot.surfSeason.includes("September" || "October" || "November") ? "blue" : "grey"} />
              <FaSnowman size={20} color={ spot.surfSeason.includes("December" || "January" || "Febuary") ? "blue" : "grey"}/>
              <GiSprout size={20} color={ spot.surfSeason.includes("March" || "April" || "May") ? "blue" : "grey"} />
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignItems={"flex-end"}
            alignContent={"flex-end"}
            justifyContent="flex-end"
          >
            <Box 
              sx={{
                display:"flex",
                alignItems:"center",
                height: "15%",
                borderRadius: 1.5,
                p: 1,
                bgcolor: "lightyellow",
                m: 0.5,
              }}
            >
            <GiWaveSurfer
              size={17}
              color={spot.level.includes("Beginner") ? "blue" : "gray"}
            />
            <GiWaveSurfer
              size={20}
              color={
                spot.level.includes("Intermediate") ? "blue" : "gray"
              }
            />
            <GiWaveSurfer
              size={23}
              color={spot.level.includes("Advanced") ? "blue" : "gray"}
            />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid item container p={0.5} marginBottom={1} alignContent={"flex-start"}>
        <Grid item xs={6}>
          {[...Array(5)].map((_, index) => {
            return (
              <Wifi
                key={index}
                sx={{ fontSize: 17 }}
                color={index <= spot.wifiQuality ? "primary" : "disabled"}
              ></Wifi>
            );
          })}
        </Grid>
        <Grid item container xs={6} justifyContent="flex-end">
          {[...Array(5)].map((_, index) => {
            return (
              <AttachMoney
                key={index}
                sx={{ fontSize: 17 }}
                color={index <= spot.lifeCost ? "primary" : "disabled"}
              ></AttachMoney>
            );
          })}
        </Grid>
        <Grid item marginTop={-0.5}>
          <Link
            component={RouterLink}
            underline="none"
            to={`/destination/${spot.id}`}
            name={spot.name}
          >
            <Typography variant="h5" align="left">
              {spot.name}
            </Typography>
            <Typography variant="h7" align="left" gutterBottom>
              {spot.country}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SpotCard;
