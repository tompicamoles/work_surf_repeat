import React, { useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { Typography } from "@mui/material";

export const WorkPlaceGoogleInfo = ({ id, savePlaceDetails , formData  }) => {
  const places = useMapsLibrary("places");

  const [placeDetails, setPlaceDetails] = useState(null);

  const getDetails = (placeId) => {
    console.log("getting details for;" ,id)
    const service = new places.PlacesService(document.createElement("div")); // it is mandatory to pass a "map" as an argument for some wierd reasons
    service.getDetails({ placeId }, (place, status) => {
      if (status === places.PlacesServiceStatus.OK) {
        console.log("place details:", place)
        savePlaceDetails(place);
      }
    });
  };

  useEffect(() => {
    getDetails(id);
  },[id]);

  return (
    <Typography variant="h4"> {formData.name} </Typography>
    
  );
};
