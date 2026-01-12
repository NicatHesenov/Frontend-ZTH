import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EmployeeState, Employee } from "../../type/type";
const initialState: EmployeeState = {
  list: [],
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
