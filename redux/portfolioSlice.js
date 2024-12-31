import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    holdings: [],
  },
  reducers: {
    addHolding: (state, action) => {
      state.holdings.push(action.payload);
    },
    setHoldings: (state, action) => {
      state.holdings = action.payload;
    },
  },
});

export const { addHolding, setHoldings } = portfolioSlice.actions;
export default portfolioSlice.reducer;
