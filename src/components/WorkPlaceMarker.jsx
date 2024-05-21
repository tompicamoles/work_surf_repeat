import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
  } from "@vis.gl/react-google-maps";

export const WorkPlaceMarker = ({latitude, longitude, name, adress}) => {
    const [open, setOpen] = useState(false);
    console.log("marker workplace is: ",name)
    const position = { lat: latitude, lng: longitude }
    console.log("position is", position)
return (
    <>
    
    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in {name}</p>
            </InfoWindow>
          )}
          </>
)
}