import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkPlace } from "./workPlacesSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid",
  borderColor: "primary.main",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export const WorkPlaceCreationPopup = ({ id }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      name: "",
      type: "",
      destination_id: id,
      submited_by: "tom",
      image: "",
      adress: "",
      rating: null,
      likes: "tom",
    });
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    destination_id: id,
    submited_by: "tom",
    image: "",
    adress: "",
    rating: null,
    likes: "tom",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Check if the input is a checkbox
    
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    
  };

  const handleOtherInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const createPlace = (event) => {
    event.preventDefault();

    
    dispatch(createWorkPlace(formData));

    handleClose();
  };

  return <Button variant="contained">Recommand a place to work form</Button>;
};
