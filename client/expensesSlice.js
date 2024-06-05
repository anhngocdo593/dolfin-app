// store/expensesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async ({ month, year }) => {
    console.log(month, year);
    const response = await axios.get(
      "https://money-manager-ebon.vercel.app/expenses/totalexpense",
      {
        params: { month, year },
      }
    );
    return response.data;
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        const formattedData = formatDataByMonth(action.payload);
        state.data = formattedData;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.amount, 0);
};

const calculatePercentage = (items, totalAmount) => {
  return items.map((item) => ({
    ...item,
    percentage: totalAmount === 0 ? 0 : (item.amount / totalAmount) * 100,
  }));
};

const formatDataByMonth = (data) => {
  const result = {};
  months.forEach((month) => {
    const itemsForMonth = data.filter(
      (item) =>
        new Date(item.date).toLocaleString("default", { month: "long" }) ===
        month
    );
    const totalAmount = calculateTotalAmount(itemsForMonth);
    result[month] = calculatePercentage(itemsForMonth, totalAmount);
  });
  return result;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default expensesSlice.reducer;
