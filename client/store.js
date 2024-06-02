import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
  },
});
