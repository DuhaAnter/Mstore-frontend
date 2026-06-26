import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/es/storage";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../store/sliceses/userSlice";
import cartReducer from '../store/sliceses/cartSlice'; 

//Persist config pointing straight to localStorage
const persistConfig = {
  key: "mstore",
  storage,
  // Optional: Only persist these slices (whitelist)
  whitelist: ["user", "cart"],
};


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
//prevent console warnings
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);