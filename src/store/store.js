import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";
import authReducer from "./slices/authSlices";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../utils/helpers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadStateFromLocalStorage("cart") || [],
  },
});

store.subscribe(() => console.log("on state change : ", store.getState()));

store.subscribe(() => {
  saveStateToLocalStorage("cart", store.getState().cart);
});

export default store;
