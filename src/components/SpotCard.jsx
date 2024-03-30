import { Card, Text, Strong, Inset } from "@radix-ui/themes";
import { Cross1Icon} from '@radix-ui/react-icons';
import DeleteContainer from "../Containers/DeleteContainer";
import { Link } from "react-router-dom";


function Bloc(props) {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
      <DeleteContainer id={props.data.id} updateData={props.updateData}/>
        <Link to={`/${props.data.id}`} name={props.data.name}>
        <Text >{props.data.name}</Text>
        <Text as="p" size="4">{props.data.country}</Text>
        
        </Link>
        
        <img
          src={props.data.image}
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
        <Strong>Surfing level : </Strong> {props.data.level}
      </Text>
      
    </Card>
  );
}

export default Bloc