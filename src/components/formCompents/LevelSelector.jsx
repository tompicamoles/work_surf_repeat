import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { GiWaveSurfer } from "react-icons/gi";

const LevelSelector = ({ level, handleOtherInputChange }) => {
  const handleChange = (e) => {
    const { name } = e.target;
    let updatedLevel = [...level];

    if (level.includes(name)) {
      updatedLevel = level.filter((item) => item !== name);
    } else {
      updatedLevel = [...updatedLevel, name];
    }
    handleOtherInputChange("level", updatedLevel);
  };

  return (
    <FormControl required component="fieldset">
      <FormLabel component="legend">Surfing Level</FormLabel>
      <FormGroup aria-label="position" row sx={{ display:"flex", alignItems:"end"}}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<GiWaveSurfer color="secondary" size={25} />}
              checkedIcon={<GiWaveSurfer color="primary" size={25} />}
              name="Beginner"
              onChange={handleChange}
            />
          }
          label="Beginner"
          labelPlacement="bottom"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<GiWaveSurfer color="secondary" size={30} />}
              checkedIcon={<GiWaveSurfer color="primary" size={30} />}
              name="Intermediate"
              onChange={handleChange}
            />
          }
          label="Intermediate"
          labelPlacement="bottom"
        />

        <FormControlLabel
          control={
            <Checkbox
              icon={<GiWaveSurfer color="secondary" size={35} />}
              checkedIcon={<GiWaveSurfer color="primary" size={35} />}
              name="Advanced"
              onChange={handleChange}
            />
          }
          label="Advanced"
          labelPlacement="bottom"
        />
      </FormGroup>
    </FormControl>
  );
};

export default LevelSelector;
