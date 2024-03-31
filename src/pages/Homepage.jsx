import { Flex, Button, Box, Text, TextArea, TextField } from "@radix-ui/themes";
import Spots from "../components/Spots.jsx";
import SpotCreationPopup from "../components/SpotCreationPopup.jsx";
import { useState, useEffect } from "react";

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
