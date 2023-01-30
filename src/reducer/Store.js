import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./Reducer/tab/tabSlice";
import accountSlice from "./Reducer/account/accountSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    account: accountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

