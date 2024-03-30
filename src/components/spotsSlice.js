import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSpots = createAsyncThunk("spots/loadSpots", async () => {
  const url =
    "https://api.airtable.com/v0/appEifpsElq8TYpAy/Table%201?maxRecords=5&view=Grid%20view";
  const token =
    "Bearer patsL0oBwMroW70T7.86828429085137c56a7993317233085e045e0924c348253c60cb8c1b9508d71c";

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();
  console.log(json);

  const cardsData = json.records.reduce((spots, record) => {
    console.log("spot before:", spots)
    spots[record.id] = {
      id: record.id,
      name: record.fields.name,
      country: record.fields.country,
      level: record.fields.level,
      image: record.fields.image,
    };
    console.log("spots after" , spots)
    return spots;
  },{});

  return cardsData;
});

export const spotsSlice = createSlice({
  name: "spots",
  initialState: {
    spots: {},
    isLoadingSpots: false,
    failedToLoadSpots: false,
  },
  reducers: {
    addSpot: (state, action) => {
      console.log("spot added");
    },

    updateSpot: (state, action) => {
      console.log("spot updated");
    },

    deleteSpot: (state, action) => {
      console.log("spot deleted");
    },

    likeSpot: (state, action) => {
      console.log("spot liked");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadSpots.pending, (state) => {
        state.isLoadingSpots = true;
        state.failedToLoadSpots = false;
      })
      .addCase(loadSpots.rejected, (state) => {
        state.isLoadingSpots = false;
        state.failedToLoadSpots = true;
      })
      .addCase(loadSpots.fulfilled, (state, action) => {
        state.isLoadingSpots = false;
        state.failedToLoadSpots = false;
        state.spots = action.payload;
        console.log("spots", action.payload)
      });
  },
});

export const selectSpots = (state) => state.spots.spots;
export const failedToLoadSpots = (state) => state.spots.failedToLoadSpots;
export const isLoadingSpots = (state) => state.spots.isLoadingSpots;

export default spotsSlice.reducer;
