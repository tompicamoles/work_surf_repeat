import { configureStore } from "@reduxjs/toolkit";
import spotsReducer from "../components/spotsSlice";

export default configureStore({
    reducer: {
    spots: spotsReducer
    },
  });