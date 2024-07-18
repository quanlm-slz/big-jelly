import { CartEntry, LocalStorageEntry, ProductInterface } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState: { orders: CartEntry[] } = { orders: [] };
const cartExpiration = [7, 'days']

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state) => {
      const orderLocalStorage: LocalStorageEntry = JSON.parse(
        localStorage.getItem("orders") || "null",
      );
      state.orders =
        !orderLocalStorage || orderLocalStorage.expiration < moment()
          ? []
          : orderLocalStorage.value;
    },
    addToCart: (state, { payload }: { payload: ProductInterface }) => {
      const entryIndex = state.orders.findIndex(
        (entry) => entry.product.id === payload.id,
      );

      if (entryIndex != -1) {
        state.orders[entryIndex].amount += 1;
      } else {
        state.orders.push({ product: payload, amount: 1 });
      }

      const orderLocalStorage: LocalStorageEntry = {
        value: state.orders,
        expiration: moment().add(...cartExpiration)
      }
      localStorage.setItem("orders", JSON.stringify(orderLocalStorage));
    },
    removeFromCart: (state, payload) => {},
  },
});

const { addToCart, removeFromCart, initializeCart } =
  cartSlice.actions;
const CartReducer = cartSlice.reducer;

export { addToCart, removeFromCart, cartSlice, initializeCart };
export default CartReducer;
