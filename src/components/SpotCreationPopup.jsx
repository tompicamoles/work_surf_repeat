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
import { createSpot } from "./spotsSlice";
import { useDispatch } from "react-redux";


function SpotCreationPopup(props) {

  const dispatch = useDispatch();

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

  const createDestination =  () => {
    dispatch(createSpot(formData.name, formData.country, formData.level))

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

export default SpotCreationPopup;
