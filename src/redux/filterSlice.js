import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const selectFilter = state => state.filter;

export default filterSlice.reducer;
