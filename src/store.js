import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './store/historySlice'; // Import your reducers

export const store = configureStore({
  reducer: {
    history: historyReducer, // Add your reducers here
  },
});