import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoSlice,
  },
});
