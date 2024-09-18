import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init';
import { reducers, extraReducers } from './reducers';

const envSlice = createSlice({
  name: 'env',
  initialState,
  reducers,
  extraReducers
});

export default envSlice.reducer;