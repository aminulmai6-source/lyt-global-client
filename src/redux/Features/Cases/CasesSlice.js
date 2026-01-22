import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cases: [],
  currentCase: null,
  filters: {
    status: "all",
    caseType: "all",
    assignedTo: "all",
  },
};

const casesSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {
    setCases: (state, action) => {
      state.cases = action.payload;
    },
    addCase: (state, action) => {
      state.cases.push(action.payload);
    },
    updateCase: (state, action) => {
      const index = state.cases.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.cases[index] = { ...state.cases[index], ...action.payload };
      }
    },
    setCurrentCase: (state, action) => {
      state.currentCase = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    deleteCase: (state, action) => {
      state.cases = state.cases.filter((c) => c.id !== action.payload);
    },
  },
});

export const {
  setCases,
  addCase,
  updateCase,
  setCurrentCase,
  setFilters,
  deleteCase,
} = casesSlice.actions;

export default casesSlice.reducer;
