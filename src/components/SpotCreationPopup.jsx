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
  Stack,
  Fab,
} from "@mui/material";

import { Wifi, AttachMoney } from "@mui/icons-material";
import { CountrySelect } from "./formCompents/CountrySelect";

import { createSpot } from "./spotsSlice";
import { useDispatch } from "react-redux";
import WifiRating from "./formCompents/WifiRating";
import LevelSelector from "./formCompents/LevelSelector";
import LifeCost from "./formCompents/LifeCost";
import MonthSelector from "./formCompents/MonthSelector";
import FileUploader from "./formCompents/FileUploader";
import AddIcon from "@mui/icons-material/Add";
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

  function getLabelText(label, value) {
    return `${label[value]}`;
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
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
    setOpen(false);
  };

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
    event.preventDefault();

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

    handleClose();
  };

  return (
    <Box>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="spot-creation-modal"
        aria-describedby="modal-to-create-spot"
      >
        <Box component="form" sx={style} onSubmit={createDestination}>
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
              {" "}
              Submit a spot
            </Typography>

            <TextField
              label="Spot Name"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <CountrySelect
              value={formData.country}
              handleOtherInputChange={handleOtherInputChange}
            />

            <LevelSelector
              id="level"
              level={formData.level}
              handleOtherInputChange={handleOtherInputChange}
            ></LevelSelector>

            <Typography component="legend">Wifi Quality:</Typography>

            <WifiRating
              value={formData.wifiQuality}
              handleInputChange={handleInputChange}
            />
            <Typography component="legend">LifeCost:</Typography>
            <LifeCost
              handleInputChange={handleInputChange}
              value={formData.lifeCost}
            ></LifeCost>

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
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

export default SpotCreationPopup;
