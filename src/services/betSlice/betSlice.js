// betDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  betData: null,
};

const betDataSlice = createSlice({
  name: 'betData',
  initialState,
  reducers: {
    setBetData(state, action) {
      state.betData = action.payload;
    },
  },
});

export const { setBetData } = betDataSlice.actions;
export default betDataSlice.reducer;
