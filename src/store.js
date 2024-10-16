// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import formSlice from './Feature/FormSlice';

export const store = configureStore({
  reducer: {
    formData: formSlice,
  },
});
