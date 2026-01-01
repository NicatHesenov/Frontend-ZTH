import { createSlice } from "@reduxjs/toolkit";
import FruitsData from "../../components/data/FruitsData";

const initialState = {
  fruitsArr: [],
};

export const fruitsSlices = createSlice({
  name: "fruitsCart",
  initialState,
  reducers: {
    toggleİtem: (state, action) => {
      const findItem = state.fruitsArr.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        state.fruitsArr = state.fruitsArr.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.fruitsArr.push(action.payload);
      }
    },
    selectAll: (state) => {
      state.fruitsArr = [...FruitsData];
    },
    deletAll: (state) => {
      state.fruitsArr = [];
    },
  },
});

export const { toggleİtem, selectAll, deletAll } = fruitsSlices.actions;

export default fruitsSlices.reducer;
