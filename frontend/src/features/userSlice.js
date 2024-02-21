import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", (payload) => {
  const email = payload.email;
  const password = payload.password;

  console.log("Payload = ", payload);
  return axios
    .post("/api/login", { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log("Error in thunk", err));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.user = {};
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
