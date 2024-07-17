import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    firstVisit: false,
  },
  reducers: {
    getVisited: (state, { payload = false }) => {
      state.firstVisit = payload
    },
    setVisited: (state) => {
      state.firstVisit = true;
    }
  },
});

const { setVisited, getVisited } = appSlice.actions;
const AppReducer = appSlice.reducer;

export default AppReducer;
export { setVisited, getVisited, appSlice };
