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
  pepperoniLayoutDatabase: [],
  buildAPizzaObjectToggle: false,
  fiveToppingsWarning: false,
  chooseACrustWarning: false,
  deletePepperoniWarning: false,
  deletePepperoniByDefault: false,
  pepperoniPerCrustObject: {
    Small: 10,
    Medium: 15,
    Large: 20,
    "X-large": 25,
    "XX-large": 30,
  },
  pepperoniLimitReachedWarning: false,
  pepperoniPizzaResizeWarning: false,
  pepperoniPizzaResizeFutureSize: "",
  pepperoniPizzaSizePixelsDatabase: {
    Small: 350,
    Medium: 400,
    Large: 450,
    "X-large": 500,
    "XX-large": 550,
  },
  pepperoniDragEventActive: false,
  onlineOrderClickedSection: "Specility Pizza",
  onlineOrderPopupType: "",
  onlinePopupActiveData: [],
  cartObject: [],
  addToCartButtonClicked: false,
  cartButtonClicked: false,
  cartButtonClosingAction: false,
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
    setDeletePepperoniWarning(state, { payload }) {
      state.deletePepperoniWarning = payload;
    },
    setDeletePepperoniByDefualt(state, { payload }) {
      state.deletePepperoniByDefault = payload;
    },
    setPepperoniPizzaResizeWarning(state, { payload }) {
      state.pepperoniPizzaResizeWarning = payload;
    },
    setPepperoniLimitReachedWarning(state, { payload }) {
      state.pepperoniLimitReachedWarning = payload;
    },
    setPepperoniPizzaResizeFutureSize(state, { payload }) {
      state.pepperoniPizzaResizeFutureSize = payload;
    },
    setPepperoniDragEventActive(state, { payload }) {
      state.pepperoniDragEventActive = payload;
    },
    setOnlineOrderClickedSection(state, { payload }) {
      state.onlineOrderClickedSection = payload;
    },
    setOnlineOrderPopupType(state, { payload }) {
      state.onlineOrderPopupType = payload;
    },
    setOnlinePopupActiveData(state, { payload }) {
      state.onlinePopupActiveData = payload;
    },
    setCartObject(state, { payload }) {
      state.cartObject = payload;
    },
    setAddToCartButtonClicked(state, { payload }) {
      state.addToCartButtonClicked = payload;
    },
    setCartButtonClicked(state, { payload }) {
      state.cartButtonClicked = payload;
    },
    setCartButtonClosingAction(state, { payload }) {
      state.cartButtonClosingAction = payload;
    },
  },
});
const store = configureStore({ reducer: storeSlice.reducer });

export const storeActions = storeSlice.actions;

export default store;
