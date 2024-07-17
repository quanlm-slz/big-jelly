import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, payload) => {
      state = { ...state, payload };
    },
    removeFromCart: (state, payload) => {},
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;
const CartReducer = cartSlice.reducer;

export { addToCart, removeFromCart, cartSlice };
export default CartReducer;
