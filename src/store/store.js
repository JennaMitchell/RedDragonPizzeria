import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = {
  buildAPizzaUserSelectedObject: {
    size: ["Medium"],
    sauce: [],
    crust: [],
    cheese: [],
    veggies: [],
    meats: [],
    other: [],
    pepperoni: [],
  },
  pepperoniLayoutDatabase: {},
  buildAPizzaObjectToggle: false,
  fiveToppingsWarning: false,
  chooseACrustWarning: false,
};
const storeSlice = createSlice({
  name: "Red Dragon Pizzeria Store",
  initialState: initialState,
  reducers: {
    setBuildAPizzaUserSelectedObject(state, { payload }) {
      state.buildAPizzaUserSelectedObject = payload;
    },
    setBuildAPizzaObjectToggle(state, { payload }) {
      state.buildAPizzaObjectToggle = payload;
    },
    setFiveToppingsWarning(state, { payload }) {
      state.fiveToppingsWarning = payload;
    },
    setChooseACrustWarning(state, { payload }) {
      state.chooseACrustWarning = payload;
    },
    setPepperoniLayoutDatabase(state, { payload }) {
      state.pepperoniLayoutDatabase = payload;
    },
  },
});
const store = configureStore({ reducer: storeSlice.reducer });

export const storeActions = storeSlice.actions;

export default store;
