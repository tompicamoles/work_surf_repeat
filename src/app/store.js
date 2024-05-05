import { configureStore } from "@reduxjs/toolkit";
import spotsReducer from "../components/spotsSlice";
import workPlacesReducer from "../components/workPlacesSlice";

export default configureStore({
    reducer: {
    spots: spotsReducer,
    workPlaces : workPlacesReducer
    },
  });