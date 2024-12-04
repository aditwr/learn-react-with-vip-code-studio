import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state = state.filter((cartItem) => cartItem.id != action.payload.id);
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    user: {
      username: null,
      userID: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user.username = action.payload.username;
      state.user.userID = action.payload.userID;
      state.authenticated = true;
    },
    logout: (state) => {
      (state.user.username = null),
        (state.user.userID = null),
        (state.authenticated = false);
    },
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;
const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});
console.log("on create store : ", store.getState());

store.subscribe(() => {
  console.log("on state changes : ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 4 }));

store.dispatch(
  login({
    username: "aditwr",
    userID: 99,
  })
);

store.dispatch(logout());
