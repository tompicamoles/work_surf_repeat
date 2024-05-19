"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import { useSelector } from "react-redux";
import { selectSpots } from "./spotsSlice";


export default function WorkPlacesMap({id}) {
  const spot = useSelector(selectSpots)[id];
  const position = { lat: spot.latitude, lng: spot.longitude };
  const [open, setOpen] = useState(false);

  return (
   
      <div style={{ height: "100vh", width: "100%" }}>
        <Map defaultZoom={15} defaultCenter={position} mapId={process.env.REACT_APP_MAP_API}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Hamburg</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    
  );
}