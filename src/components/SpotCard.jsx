import { Card, Text, Strong, Inset } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSpots } from "./spotsSlice";


function SpotCard({id}) {
 const spot = useSelector(selectSpots)[id]
 
 

  
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
      
        <Link to={`/${spot.id}`} name={spot.name}>
        <Text >{spot.name}</Text>
        <Text as="p" size="4">{spot.country}</Text>
        
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
  );
}

export default SpotCard