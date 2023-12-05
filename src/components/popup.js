import React, { useState } from "react";
import {
  Select,
  Flex,
  Popover,
  Button,
  Box,
  Text,
  TextField,
  SelectGroup,
} from "@radix-ui/themes";

function Popup(props) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    level: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name);
  };

  const handleLevelInputChange = (value, id) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(id);
  };

  const createDestination = async () => {
    const generateImage = async (name, country) => {
      // Generate image URL based on name and country
      const query = ` ${name} ${country} surfing `;
      const url = `https://api.unsplash.com/photos/random?query=${query}`;
      const token = "Client-ID NqJL9YuQCoBadK9v4WV5LPmiitfKvc2CHPLYbUI6e-Y";

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }

        const data = await response.json();
        const imgUrl = data.urls.regular;
        console.log(imgUrl); // You can log the URL here
        return imgUrl;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // You can handle or propagate the error as needed
      }
    };

    const image = await generateImage(formData.name, formData.country); //

    const data = {
      records: [
        {
          fields: {
            name: formData.name,
            country: formData.country,
            level: formData.level,
            image: image,
          },
        },
      ],
    };

    const url = "https://api.airtable.com/v0/appEifpsElq8TYpAy/Table%201";
    const token =
      "Bearer patsL0oBwMroW70T7.86828429085137c56a7993317233085e045e0924c348253c60cb8c1b9508d71c"; // Replace with your actual API key

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.updateData();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setFormData({
      name: "",
      country: "",
      level: "",
      image: "",
    });
  };

  return (
    <Box>
      <Popover.Root>
        <Popover.Trigger>
          <Button>Create a destination</Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 600 }}>
          <Flex gap="3">
            <Box>
              <Text as="p">Name:</Text>
              <TextField.Input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Text as="p">Country:</Text>
              <TextField.Input
                placeholder="Country"
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Text as="p">Surfing Level:</Text>

              <Select.Root
                value={formData.level}
                onValueChange={(value) =>
                  handleLevelInputChange(value, "level")
                }
              >
                <Select.Trigger placeholder="Level" />

                <Select.Content id="level" name="level">
                  <Select.Group>
                    <Select.Label>Level</Select.Label>
                    <Select.Item id="level" name="level" value="Beginner">
                      Beginner
                    </Select.Item>
                    <Select.Item id="level" name="level" value="Intermediate">
                      Intermediate
                    </Select.Item>
                    <Select.Item id="level" name="level" value="Advanced">
                      Advanced
                    </Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Box>
            <Box>
              <Popover.Close>
                <Button type="button" onClick={createDestination}>
                  Save destination
                </Button>
              </Popover.Close>
            </Box>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </Box>
  );
}

export default Popup;
