import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

import thunk from "redux-thunk";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },

  middleware: [thunk],
});

// export type AppDispatch = typeof store.dispatch;
// // export const dispatch = () => useDispatch<AppDispatch>();

// export type RootState = ReturnType<typeof store.getState>
// export default store;
