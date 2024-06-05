import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import authReducer from "./authSlice";
import expensesReducer from "./expensesSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    expenses: expensesReducer,
  },
});
