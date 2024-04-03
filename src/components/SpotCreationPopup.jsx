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
import { StarIcon } from "@radix-ui/react-icons";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { createSpot } from "./spotsSlice";
import { useDispatch } from "react-redux";
import WifiRating from "./formCompents/WifiRating";
import LevelSelector from "./formCompents/LevelSelector";
import LifeCost from "./formCompents/LifeCost";
import MonthSelector from "./formCompents/MonthSelector";
import FileUploader from "./formCompents/FileUploader";

function SpotCreationPopup() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    level: [],
    surfSeason: [],
    image: "",
    wifiQuality: null,
    hasCoworking: false,
    hasColiving: false,
    lifeCost: null,
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    // Check if the input is a checkbox
    if (name === "hasCoworking" || name === "hasColiving") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked, // Use checked property for checkboxes
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleOtherInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const createDestination = () => {
    console.log("country to send", formData.country);
    const spotData = {
      name: formData.name,
      country: formData.country,
      level: formData.level,
      surfSeason: formData.surfSeason,
      wifiQuality:formData.wifiQuality,
      hasCoworking: formData.hasCoworking,
      hasColiving: formData.hasColiving,
      lifeCost: formData.lifeCost
    };
    dispatch(createSpot(spotData));

    setFormData({
      name: "",
      country: "",
      level: [],
      surfSeason: [],
      image: "",
      wifiQuality: null,
      hasCoworking: false,
      hasColiving: false,
      lifeCost: null,
    });
  };

  return (
    <Box>
      <Popover.Root>
        <Popover.Trigger>
          <Button>Create a destination</Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 1000 }}>
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

              <LevelSelector
                level={formData.level}
                handleOtherInputChange={handleOtherInputChange}
              ></LevelSelector>
            </Box>
            <Box>
              <Text as="p">Wifi Quality:</Text>
              <WifiRating
                handleOtherInputChange={handleOtherInputChange}
                wifiQuality={formData.wifiQuality}
              ></WifiRating>
            </Box>
            <Box>
              <Text as="p">LifeCost:</Text>
              <LifeCost
                handleOtherInputChange={handleOtherInputChange}
                lifeCost={formData.lifeCost}
              ></LifeCost>
            </Box>
            <Box>
              <Text>Best surfing season</Text>
              <MonthSelector
                handleInputChange={handleInputChange}
                surfSeason={formData.surfSeason}
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.hasCoworking}
                    id="hasCoworking"
                    name="hasCoworking"
                    onChange={handleInputChange}
                  />
                }
                label="Has Coworking"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.hasColiving}
                    name="hasColiving"
                    id="hasColiving"
                    onChange={handleInputChange}
                  />
                }
                label="Has Coliving"
              />
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

export default SpotCreationPopup;
