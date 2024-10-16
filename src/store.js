// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import FormSlice from './Feature/FormSlice';

export const store = configureStore({
  reducer: {
    formData: FormSlice,
  },
});
