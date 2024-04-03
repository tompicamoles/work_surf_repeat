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

function SpotCard({ id }) {
  const spot = useSelector(selectSpots)[id];

  return (
    <>
      <Card size="2" style={{ maxWidth: 240 }}>
        <Inset clip="padding-box" side="top" pb="current">
          <Link to={`/${spot.id}`} name={spot.name}>
            <Text>{spot.name}</Text>
            <Text as="p" size="4">
              {spot.country}
            </Text>
          </Link>

          <img
            src={spot.image}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          <Strong>Surfing level : </Strong> {spot.level}
        </Text>
      </Card>

      <Card>
        <Container>
          <Grid container  spacing={2}>
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
              <Box align="left">Surf Season</Box>
              <Box align="left">Level</Box>
              <Box align="left">
                {[...Array(5)].map((_, index) => {
                  return (
                    <BiDollar
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
