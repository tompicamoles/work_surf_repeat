import { Flex } from "@radix-ui/themes";
import Spots from "../components/Spots.jsx";
import SpotCreationPopup from "../components/SpotCreationPopup.jsx";

function HomePage() {
  


 
      

  return (
    <div className="App">
      <header className="App-header">
        <Flex direction="column" gap="3">
          <Spots />
          <SpotCreationPopup />
        </Flex>
      </header>
    </div>
  );
}

export default HomePage;
