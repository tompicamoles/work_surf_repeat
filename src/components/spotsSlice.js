import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://api.airtable.com/v0/appEifpsElq8TYpAy/spots";
const token =
  "Bearer patsL0oBwMroW70T7.86828429085137c56a7993317233085e045e0924c348253c60cb8c1b9508d71c"; // Replace with your actual API key

export const createSpot = createAsyncThunk(
  "spots/createSpot",
  async (spotData) => {
    const { name, country, level } = spotData;
    console.log("name", name, "country", country, "level", level);
    const generateImage = async (name) => {
      // Generate image URL based on name and country
      const query = ` ${name}  surfing `;
      const url = `https://api.unsplash.com/photos/random?query=${query}`;
      const token = "Client-ID NqJL9YuQCoBadK9v4WV5LPmiitfKvc2CHPLYbUI6e-Y";

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: token,
            Params: {
              query: "surf",
            },
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }

        const data = await response.json();
        const imgUrl = data.urls.regular;
        return imgUrl;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // You can handle or propagate the error as needed
      }
    };

    const image = await generateImage(name); //

    const data = {
      records: [
        {
          fields: {
            name: name,
            country: country,
            level: level,
            image: image,
          },
        },
      ],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    const spot = json.records[0];

    const newSpot = {
      id: spot.id,
      name: spot.fields.name,
      country: spot.fields.country,
      level: spot.fields.level,
      image: spot.fields.image,
    };

    return newSpot
  }

);

export const loadSpots = createAsyncThunk("spots/loadSpots", async () => {
  const getUrl = `${url}?maxRecords=5&view=Grid%20view`;

  const response = await fetch(getUrl, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();
  console.log(json);

  const cardsData = json.records.reduce((spots, record) => {
    console.log("spot before:", spots);
    spots[record.id] = {
      id: record.id,
      name: record.fields.name,
      country: record.fields.country,
      level: record.fields.level,
      image: record.fields.image,
    };
    console.log("spots after", spots);
    return spots;
  }, {});

  return cardsData;
});

export const spotsSlice = createSlice({
  name: "spots",
  initialState: {
    spots: {},
    isLoadingSpots: false,
    failedToLoadSpots: false,
    isLoadingSpotCreation: false,
    failedToCreateSpot: false,
  },
  reducers: {
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
        console.log("spots", action.payload);
      })
      .addCase(createSpot.pending, (state) => {
        state.isLoadingSpotCreation = true;
        state.failedToCreateSpot = false;
      })
      .addCase(createSpot.rejected, (state) => {
        state.isLoadingSpotCreation = false;
        state.failedToCreateSpot = true;
      })
      .addCase(createSpot.fulfilled, (state, action) => {
        state.isLoadingSpotCreation = false;
        state.failedToCreateSpot = false;
        state.spots[action.payload.id] = action.payload;
        console.log("new spot created:", action.payload);
      });
  },
});

export const selectSpots = (state) => state.spots.spots;
export const failedToLoadSpots = (state) => state.spots.failedToLoadSpots;
export const isLoadingSpots = (state) => state.spots.isLoadingSpots;

export default spotsSlice.reducer;
