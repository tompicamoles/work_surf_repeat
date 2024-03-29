import { Flex, Button, Box, Text, TextArea, TextField } from "@radix-ui/themes";
import CardTable from "./card-table";
import Popup from "./popup.js";
import { useState, useEffect } from "react";

function HomePage() {
  const [cards, setCards] = useState([]);

  const updateData = () => {
    const url =
      "https://api.airtable.com/v0/appEifpsElq8TYpAy/Table%201?maxRecords=5&view=Grid%20view";
    const token =
      "Bearer patsL0oBwMroW70T7.86828429085137c56a7993317233085e045e0924c348253c60cb8c1b9508d71c";

    fetch(url, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Extract the data you need from each record and store it in an array
        const cardsData = data.records.map((record) => {
          return {
            // Extract the fields you need
            id: record.id,
            name: record.fields.name,
            country: record.fields.country,
            level: record.fields.level,
            image: record.fields.image,
            // Add more fields as needed
          };
        });
        // Set the cards data in the state
        setCards(cardsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Flex direction="column" gap="3">
          <CardTable cards={cards} updateData={updateData} />
          <Popup updateData={updateData} />
        </Flex>
      </header>
    </div>
  );
}

export default HomePage;
