import React, { useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

export const WorkPlaceGoogleInfo = () => {
  const places = useMapsLibrary("places");

  const [placeDetails, setPlaceDetails] = useState(null);

  const getDetails = (placeId) => {
    const service = new places.PlacesService(document.createElement("div")); // it is mandatory to pass a "map" as an argument for some wierd reasons
    service.getDetails({ placeId }, (place, status) => {
      if (status === places.PlacesServiceStatus.OK) {
        setPlaceDetails(place);
      }
    });
  };

  return (
    <div>
      <button onClick={() => getDetails("ChIJq_G6Ew71ikcRbG-Uzt_e5Hg")}>
        Get Details
      </button>
      {placeDetails && (
        <div>
          <h2>{placeDetails.name}</h2>
          <p>{placeDetails.formatted_address}</p>
        </div>
      )}
    </div>
  );
};
