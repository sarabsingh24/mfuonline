import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer/CombineReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
