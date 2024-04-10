import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSpots } from "./spotsSlice";
import { Box, Card, Container, Grid, Paper, Typography, Checkbox } from "@mui/material";
import { FaWifi } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaHouseLaptop } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { GiWaveSurfer } from "react-icons/gi";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function SpotCard({ id }) {
  const spot = useSelector(selectSpots)[id];

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} p={0.5}
    sx={{
      width: "100%",
      
    }} >
      <Card
        sx={{
          
          minHeight: 250,
          bgcolor:"lightgreen"
          
        }}
      >
        <Grid container p={1} >
          <Grid item xs={10} >
            <Link to={`/destination/${spot.id}`} name={spot.name}>
              <Typography variant="h4" align="left">
                {spot.name}
              </Typography>
              <Typography variant="h6" align="left" gutterBottom>
                {spot.country}
              </Typography>
            </Link>
          </Grid>

          <Grid item container  xs={2}  alignContent={"center"} direction="row-reverse" >
          <Checkbox  icon={<ThumbUpIcon fontSize="large" />} checkedIcon={<ThumbUpIcon fontSize="large" />} />
          </Grid>

          < Grid item xs={12} >
            <Paper
            sx={{
              backgroundSize: "cover", // Adjust the size of the background image
              backgroundPosition: "center", // Center the background image
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${spot.image})`,
              display: "flex",
              
              minHeight: 200,
            
            }}>
              <Grid container m={1} >
                <Grid item xs={9} >  {[...Array(5)].map((_, index) => {
                return (
                  <FaWifi
                    key={index}
                    size={30}
                    color={index <= spot.wifiQuality ? "blue" : "grey"}
                  ></FaWifi>
                );
              })}</Grid>
                <Grid item container xs={3} direction="row" > 
                 <Grid idem>
              {spot.hasCoworking ? (
                <RiComputerFill color="blue" size={30} />
              ) : (
                <RiComputerFill color="grey"size={30} />
              )}
            </Grid>

            <Grid item>
              {spot.hasColiving ? (
                <FaHouseLaptop color="blue"size={30} />
              ) : (
                <FaHouseLaptop color="grey"size={30} />
              )}
            </Grid></Grid>
                <Grid item container xs={12} direction="row"
                sx={{gap: 0.5}}>  {[
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
                  return (
                    <Typography variant="h6" key={index}>{month.slice(0, 3)} </Typography>
                  );
                }
              })} </Grid>
                <Grid item xs={8} > {[...Array(5)].map((_, index) => {
                return (
                  <BiDollar
                    key={index}
                    size={30}
                    color={index <= spot.lifeCost ? "blue" : "grey"}
                  ></BiDollar>
                );
              })}</Grid>
                <Grid item xs={4} ><GiWaveSurfer
                size={25}
                color={spot.level.includes("Beginner") ? "blue" : "grey"}
              />
              <GiWaveSurfer
                size={30}
                color={spot.level.includes("Intermediate") ? "blue" : "grey"}
              />
              <GiWaveSurfer
                size={35}
                color={spot.level.includes("Advanced") ? "blue" : "grey"}
              /></Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default SpotCard;
