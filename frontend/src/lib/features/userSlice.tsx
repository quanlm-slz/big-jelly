import { createSlice } from "@reduxjs/toolkit";
import cookie from "@boiseitguru/cookie-cutter";

type SliceType = {
  token?: string | null;
  email?: string | null;
  login: boolean;
};

const initialState: SliceType = {
  login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeUser: (state) => {
      const token = cookie.get("token") || "";
      const headers = new Headers();
      headers.append("Authorization", token);
      if (token) {
        fetch(`/api/user/me`, {
          method: "get",
          headers,
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
      }
    },
  },
});

const UserReducer = userSlice.reducer;
export default UserReducer;
export const { initializeUser } = userSlice.actions;
