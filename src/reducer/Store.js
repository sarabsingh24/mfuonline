// import { configureStore } from "@reduxjs/toolkit";
// import tabReducer from './Reducer/TabReducer'
// import accountSlice from './Reducer/account/accountSlice'

// export const store= configureStore({
//   reducer: {
//     tab:tabReducer,
//     account: accountSlice,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer/CombineReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
