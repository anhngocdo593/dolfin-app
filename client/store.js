import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import authReducer from "./authSlice";
import expensesReducer from "./expensesSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    expenses: expensesReducer,
    user: userReducer,
  },
});
