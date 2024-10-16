
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
};

const FormSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
      console.log('Updated Form Data:', state.formData);
    },
  },
});

export const { addFormData } = FormSlice.actions;

export default FormSlice.reducer;
