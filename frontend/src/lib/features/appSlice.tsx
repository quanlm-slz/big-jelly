import { LocalStorageEntry } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const visitedExpiration = [7, "days"];

const appSlice = createSlice({
  name: "app",
  initialState: {
    firstVisit: false,
  },
  reducers: {
    initializeClientStates: (state) => {
      const visitEntry: LocalStorageEntry | null = JSON.parse(
        localStorage.getItem("visited") || "null",
      );
      state.firstVisit =
        !visitEntry || visitEntry.expiration < moment()
          ? false
          : visitEntry.value;
    },
    setVisited: (state) => {
      state.firstVisit = true;
      const visitedLocalStorage: LocalStorageEntry = {
        value: true,
        expiration: moment().add(...visitedExpiration),
      };
      localStorage.setItem("visited", JSON.stringify(visitedLocalStorage));
    },
  },
});

const { setVisited, initializeClientStates } = appSlice.actions;
const AppReducer = appSlice.reducer;

export default AppReducer;
export { setVisited, initializeClientStates, appSlice };
