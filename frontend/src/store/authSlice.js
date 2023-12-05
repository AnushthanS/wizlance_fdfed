import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {}, // store user object
    userToken: {}, // store user token
    error: null,
    success: false, // monitoring the registration
}

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {},
        extraReducers: {},
    }
);

export default authSlice.reducer;