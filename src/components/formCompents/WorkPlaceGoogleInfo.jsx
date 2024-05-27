import React, { useEffect} from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { Rating, Typography } from "@mui/material";

export const WorkPlaceGoogleInfo = ({ id, savePlaceDetails, formData }) => {
  const places = useMapsLibrary("places");



  const getDetails = (placeId) => {
    console.log("getting details for;", id);
    const service = new places.PlacesService(document.createElement("div")); // it is mandatory to pass a "map" as an argument for some wierd reasons
    service.getDetails({ placeId }, (place, status) => {
      if (status === places.PlacesServiceStatus.OK) {
        console.log("place details:", place);
        savePlaceDetails(place);
      }
    });
  };

  useEffect(() => {
    getDetails(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Typography variant="h5"> {formData.name} </Typography>
      <Typography variant="h7">{formData.adress}</Typography>
      <Rating name="rating" value={formData.rating} precision={0.5} readOnly />
    </>
  );
};
