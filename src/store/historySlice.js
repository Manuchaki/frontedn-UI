import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHistory = createAsyncThunk('history/fetchHistory', async (token) => {
  const response = await fetch('/api/history', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
});

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default historySlice.reducer;
