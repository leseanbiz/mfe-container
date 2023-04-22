import { createSlice } from "@reduxjs/toolkit";

export interface ContainerState {
  name: string;
}

const initialState: ContainerState = {
  name: "",
};

export const containerSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { increment } = containerSlice.actions;

export default containerSlice.reducer;
