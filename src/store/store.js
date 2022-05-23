import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {};
const storeSlice = createSlice({
  name: "Red Dragon Pizzeria Store",
  initialState: initialState,
  reducers: {},
});
const store = configureStore({ reducer: storeSlice.reducer });

export const storeActions = storeSlice.actions;

export default store;
