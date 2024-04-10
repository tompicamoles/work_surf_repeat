import { useState } from "react";

import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
  Typography,
  Modal,
  Rating,
  Switch,
  Autocomplete,
} from "@mui/material";

import { Wifi, MonetizationOn } from "@mui/icons-material";
import { CountrySelect } from "./formCompents/CountrySelect";

import { createSpot } from "./spotsSlice";
import { useDispatch } from "react-redux";
import WifiRating from "./formCompents/WifiRating";
import LevelSelector from "./formCompents/LevelSelector";
import LifeCost from "./formCompents/LifeCost";
import MonthSelector from "./formCompents/MonthSelector";
import FileUploader from "./formCompents/FileUploader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SpotCreationPopup() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    country: null,
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

  const createDestination = (event) => {

    event.preventDefault()

    console.log("country to send", formData.country);
    const spotData = {
      name: formData.name,
      country: formData.country,
      level: formData.level,
      surfSeason: formData.surfSeason,
      wifiQuality: formData.wifiQuality,
      hasCoworking: formData.hasCoworking,
      hasColiving: formData.hasColiving,
      lifeCost: formData.lifeCost,
    };
    dispatch(createSpot(spotData));

    setFormData({
      name: "",
      country: null,
      level: [],
      surfSeason: [],
      image: "",
      wifiQuality: null,
      hasCoworking: false,
      hasColiving: false,
      lifeCost: null,
    });
    handleClose()

  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Create a spot
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="spot-creation-modal"
        aria-describedby="modal-to-create-spot"
      >
        <Box component="form" sx={style} onSubmit={createDestination}>
          <Typography as="p">Name:</Typography>
          <TextField
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <Typography as="p">Country:</Typography>

          <CountrySelect
            value={formData.country}
            handleOtherInputChange={handleOtherInputChange}
          />

          <Typography as="p">Surfing Level:</Typography>

          <LevelSelector
            level={formData.level}
            handleOtherInputChange={handleOtherInputChange}
          ></LevelSelector>

          <Typography as="p">Wifi Quality:</Typography>
          <Rating
            name="wifiQuality"
            defaultValue={2}
            icon={<Wifi fontSize="inherit" />}
            emptyIcon={<Wifi fontSize="inherit" />}
            onChange={handleInputChange}
            value={formData.wifiQuality}
          ></Rating>

          <Typography as="p">LifeCost:</Typography>
          <Rating
            name="lifeCost"
            defaultValue={2}
            icon={<MonetizationOn fontSize="inherit" />}
            emptyIcon={<MonetizationOn fontSize="inherit" />}
            onChange={handleInputChange}
            value={formData.lifeCost}
          ></Rating>

          <Typography>Best surfing season</Typography>
          <MonthSelector
            handleInputChange={handleInputChange}
            surfSeason={formData.surfSeason}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.hasCoworking}
                  id="hasCoworking"
                  name="hasCoworking"
                  onChange={handleInputChange}
                />
              }
              label="Has Coworking"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={formData.hasColiving}
                  name="hasColiving"
                  id="hasColiving"
                  onChange={handleInputChange}
                />
              }
              label="Has Coliving"
            />
          </FormGroup>

          <Button type="submit" variant="contained">
            Save destination
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default SpotCreationPopup;
