// betDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  betData: null,
};

const betDataPayloadSlice = createSlice({
  name: 'betDataPayload',
  initialState,
  reducers: {
    setBetData(state, action) {
      state.betData = action.payload;
    },
  },
});

export const { setBetPayload } = betDataPayloadSlice.actions;
export default betDataPayloadSlice.reducer;
