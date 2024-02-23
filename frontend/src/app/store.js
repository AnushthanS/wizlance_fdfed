import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/userSlice";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Combine the persistConfig with your root reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor object for persisting the store
const persistor = persistStore(store);

export { store, persistor };
