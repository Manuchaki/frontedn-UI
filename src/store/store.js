import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './historySlice';

const store = configureStore({
  reducer: {
    history: historyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
