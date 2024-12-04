import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((p) => p.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      // state = state.map((cartItem) => {
      //   if (cartItem.id === action.payload.id) {
      //     cartItem.quantity += 1;
      //   }
      //   return cartItem;
      // });
      const product = state.find((p) => p.id === action.payload.id);
      product.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.find((p) => p.id === action.payload.id);
      if (existingProduct.quantity === 1) {
        // return a new array with the item removed
        return state.filter((cartItem) => cartItem.id !== action.payload.id);
      } else {
        // modify the draft state directly
        state = state.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem.quantity -= 1;
          }
          return cartItem;
        });
      }
    },
  },
});

const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export { addToCart, increaseQuantity, decreaseQuantity };
export default cartSlice.reducer;
