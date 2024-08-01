import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type SliceType = {
  token?: string;
  error: Record<string, string>;
  user: Record<string, any>;
  status: "loading" | "idle" | "error" | "loggedIn";
};

const initialState: SliceType = {
  user: {},
  error: {},
  status: "idle",
};

const errorHandler = (state: any, action: any) => {
  const payload = action.payload;
  state.error = payload as Record<any, any>;
  state.status = "error";
};

const loadingHandler = (state: any) => {
  if (state.status === "loading") return;
  state.status = "loading";
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetStore: (state) => {
      state.status = "idle"
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        if (payload.status === "success") {
          state.user.email = payload.data.email;
          state.token = payload.data.token;
          state.status = "loggedIn";
        } else {
          state.error = payload.message as Record<any, any>;
          state.status = "error";
        }
      })
      .addCase(registerUser.rejected, errorHandler)
      .addCase(registerUser.pending, loadingHandler)

      .addCase(initializeUser.fulfilled, (state, { payload }) => {
        if (payload.status === "success") {
          state.user.email = payload.data.email;
          state.token = payload.data.token;
          state.status = "loggedIn";
        } else {
          state.status = "error";
        }
      })
      .addCase(initializeUser.rejected, errorHandler)
      .addCase(initializeUser.pending, loadingHandler);
  },
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: Record<any, any>, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/customers/sign_up", userData, {
        validateStatus: () => true,
      });
      return response.data;
    } catch (error) {
      rejectWithValue({ general: "Internal server error" });
    }
  },
);

export const initializeUser = createAsyncThunk(
  "user/initializeUser",
  async (token: string | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/customers/me", {
        headers: { Authorization: token || "" },
        validateStatus: () => true,
      });
      return response.data;
    } catch (error) {
      rejectWithValue({ general: "Internal server error" });
    }
  },
);

export const { resetStore } = userSlice.actions;
const UserReducer = userSlice.reducer;
export const UserState = userSlice.selectors;
export default UserReducer;
