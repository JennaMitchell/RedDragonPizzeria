import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  buildAPizzaUserSelectedObject: {},
};
const storeSlice = createSlice({
  name: "Red Dragon Pizzeria Store",
  initialState: initialState,
  reducers: {
    setBuildAPizzaUserSelectedObject(state, { payload }) {
      state.buildAPizzaUserSelectedObject = payload;
    },
  },
});
const store = configureStore({ reducer: storeSlice.reducer });

export const storeActions = storeSlice.actions;

export default store;
