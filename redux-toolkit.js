import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer(
  {
    status: false,
    user: null,
  },
  (builder) => {
    builder.addCase(login, (state, action) => {
      (state.user = action.payload.username), (state.status = true);
    });
  }
);

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("on create store : ", store.getState());

store.subscribe(() => {
  console.log("on state changes : ", store.getState());
});

store.dispatch(login({ username: "aditwr", userID: 99 }));
store.dispatch(addToCart({ id: 1, qty: 4 }));
