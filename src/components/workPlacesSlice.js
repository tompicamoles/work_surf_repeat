import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://api.airtable.com/v0/appEifpsElq8TYpAy/work_places";
const token = process.env.REACT_APP_AIRTABLE_API_KEY;

export const loadWorkPlaces = createAsyncThunk(
  "workPlaces/loadWorkPlaces",
  async () => {
    const getUrl = `${url}?maxRecords=3&view=Grid%20view`;

    const response = await fetch(getUrl, {
      headers: {
        Authorization: token,
      },
    });

    const json = await response.json();
    console.log(json);

    const workPlacesData = json.records.reduce((workPlaces, record) => {
      workPlaces[record.id] = {
        id: record.id,
        type: record.fields.type,
        destinationId: record.fields.destination_id,
        submitedBy: record.fields.submited_by,
        adress: record.fields.adress,
        rating: record.fields.rating,
        likes: record.fields.rating,
        image: record.fields.image,
      };
      return workPlaces;
    }, {});

    return workPlacesData;
  }
);



export const workPlacesSlice = createSlice({
  name: "workPlaces",
  initialState: {
    workPlaces: {},
    isLoadingWorkPlaces: false,
    failedToLoadWorkPlaces: false,
  },
//   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWorkPlaces.pending, (state) => {
        state.isLoadingWorkPlaces = true;
        state.failedToLoadWorkPlaces = false;
      })
      .addCase(loadWorkPlaces.rejected, (state) => {
        state.isLoadingWorkPlaces = false;
        state.failedToLoadWorkPlaces = true;
      })
      .addCase(loadWorkPlaces.fulfilled, (state, action) => {
        state.isLoadingWorkPlaces = false;
        state.failedToLoadWorkPlaces = false;
        state.workPlaces = action.payload;
        console.log("workPlaces", action.payload);
      });
  },
});

export const selectWorkPlaces = (state) => state.workPlaces.workPlaces;
export const failedToLoadWorkPlaces = (state) =>
  state.workPlaces.failedToLoadWorkPlaces;
export const isLoadingWorkPlaces = (state) =>
  state.workPlaces.isLoadingWorkPlaces;

export default workPlacesSlice.reducer;
