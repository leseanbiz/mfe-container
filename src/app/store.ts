import { configureStore } from "@reduxjs/toolkit";
import containerReducer from "./containerSlice";

// @ts-ignore
import { app2Slice } from "app2/app2Slice";

const containerInitialState = {
  name: "containerInitialState",
};

const store = configureStore({
  reducer: {
    container: containerReducer,
    app2: app2Slice.reducer,
  },
  preloadedState: {
    container: containerInitialState,
    app2: { value: "test from container" },
  },
});

export { store };
