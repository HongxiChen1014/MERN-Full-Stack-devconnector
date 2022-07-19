import { configureStore, createSlice } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {};
const reduceSlice = createSlice({
  name: "counter",
  initialState,
  reducers: rootReducer,
});
const store = configureStore({ reducer: reduceSlice });

export default store;
