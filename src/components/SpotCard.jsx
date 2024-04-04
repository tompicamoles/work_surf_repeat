import { Text, Strong, Inset } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSpots } from "./spotsSlice";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { FaWifi } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaHouseLaptop } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { GiWaveSurfer } from "react-icons/gi";

function SpotCard({ id }) {
  const spot = useSelector(selectSpots)[id];

  return (
    <>
      

      <Card>
        <Container sx={{
        backgroundImage: `url(${spot.image})`, // Ensure the path is correct
        height: '385px',
        backgroundSize: 'cover', // Adjust the size of the background image
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat',
        
      }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Link to={`/${spot.id}`} name={spot.name}>
                <Typography variant="h3" align="left">
                  {spot.name}
                </Typography>
                <Typography variant="h5" align="left" gutterBottom>
                  {spot.country}
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={3}>
              <Box>
                {[...Array(5)].map((_, index) => {
                  return (
                    <FaWifi
                      key={index}
                      size={20}
                      color={index <= spot.wifiQuality ? "blue" : "grey"}
                    ></FaWifi>
                  );
                })}
              </Box>

              <Box>
                {spot.hasCoworking ? (
                  <RiComputerFill color="blue" />
                ) : (
                  <RiComputerFill color="grey" />
                )}
              </Box>

              <Box>
                {spot.hasColiving ? (
                  <FaHouseLaptop color="blue" />
                ) : (
                  <FaHouseLaptop color="grey" />
                )}
              </Box>
            </Grid>

            <Grid item xs={9}>
              <Box align="left" sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
                {[
                  "January",
                  "Febuary",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "Septembre",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => {
                  if (spot.surfSeason.includes(month)) {
                    return <Typography key={index}>{month.slice(0, 3)} </Typography>;
                  }
                })}
              </Box>
              <Box align="left">
                <GiWaveSurfer
                  size={15}
                  color={spot.level.includes("Beginner") ? "blue" : "grey"}
                />
                <GiWaveSurfer
                  size={17}
                  color={spot.level.includes("Intermediate") ? "blue" : "grey"}
                />
                <GiWaveSurfer
                  size={20}
                  color={spot.level.includes("Advanced") ? "blue" : "grey"}
                />
              </Box>
              <Box align="left">
                {[...Array(5)].map((_, index) => {
                  return (
                    <BiDollar
                      key={index}
                      size={20}
                      color={index <= spot.lifeCost ? "blue" : "grey"}
                    ></BiDollar>
                  );
                })}
              </Box>
            </Grid>

            <Grid item xs={3}>
              <AiFillLike size={50} />
            </Grid>
          </Grid>
        </Container>
      </Card>
    </>
  );
}

export default SpotCard;
