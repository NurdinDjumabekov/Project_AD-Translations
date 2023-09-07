import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const initialState = {
  dataReviews: [],
  dataFAQ: [],
};

export const toTakeDataReviews = createAsyncThunk(
  "toTakeDataUpdates",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios(`${BASE_URL}reviews/list/`);
      dispatch(changeDataReviews(data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const toTakeFAQ = createAsyncThunk(
  "toTakeFAQ",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios(`${BASE_URL}faq/list/`);
      dispatch(changeDataFAQ(data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const toTakeData = createAsyncThunk(
  "toTakeFAQ",
  async (info, { dispatch }) => {
    try {
      const { data } = await axios(`${BASE_URL}faq/list/`);
      dispatch(changeDataFAQ(data));
    } catch (err) {
      console.log(err);
    }
  }
);

const aboutPageSlice = createSlice({
  name: "aboutPageSlice",
  initialState,
  reducers: {
    changeDataReviews: (state, action) => {
      state.dataReviews = action.payload;
    },
    changeDataFAQ: (state, action) => {
      state.dataFAQ = action.payload;
    },
  },
});
export const { changeDataReviews, changeDataFAQ } = aboutPageSlice.actions;

export default aboutPageSlice.reducer;
