import { CartEntry, LocalStorageEntry, ProductInterface } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState: { orders: CartEntry[] } = { orders: [] };
const addCartToLocalStorage = (orders: any) => {
  const cartExpiration = [7, "days"];
  const orderLocalStorage: LocalStorageEntry = {
    value: orders,
    expiration: moment().add(...cartExpiration),
  };
  localStorage.setItem("orders", JSON.stringify(orderLocalStorage));
};

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

      if (entryIndex != -1) state.orders[entryIndex].amount += 1;
      else state.orders.push({ product: payload, amount: 1 });

      addCartToLocalStorage(state.orders);
    },
    removeFromCart: (state, { payload }: { payload: ProductInterface }) => {
      const entryIndex = state.orders.findIndex(
        (entry) => entry.product.id === payload.id,
      );

      if (entryIndex == -1) throw new Error("Cannot find product in cart");

      let updatedEntry = state.orders[entryIndex];

      if (updatedEntry.amount <= 1) state.orders.filter((_, index) => index != entryIndex);
      else state.orders[entryIndex].amount -= 1;

      addCartToLocalStorage(state.orders);
    },
  },
});

const CartReducer = cartSlice.reducer;

export default CartReducer;
export const { addToCart, removeFromCart, initializeCart } = cartSlice.actions;
