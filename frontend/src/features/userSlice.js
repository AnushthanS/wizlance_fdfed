import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (payload) => {
  const email = payload.email;
  const password = payload.password;

  console.log("Payload = ", payload);
  try {
    const response = await axios.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    console.log(error)
    if (error.response && error.response.status === 401) {
      throw new Error("Invalid login credentials");
    } else {
      throw error;
    }
  }
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
