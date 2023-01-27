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

// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./Reducer/CombineReducer";

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
