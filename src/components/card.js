import { Card, Text, Strong, Inset } from "@radix-ui/themes";
import { Cross1Icon} from '@radix-ui/react-icons';
import DeleteContainer from "../Containers/DeleteContainer";


function Bloc(props) {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <Text >{props.data.name}</Text>
        <DeleteContainer/>

        <Text as="p" size="4">{props.data.country}</Text>
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