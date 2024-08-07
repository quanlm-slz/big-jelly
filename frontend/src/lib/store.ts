import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cartSlice";
import AppReducer from "./features/appSlice";
import UserReducer from "./features/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: AppReducer,
      cart: CartReducer,
      user: UserReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
