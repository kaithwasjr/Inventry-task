import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formValues: {
    itemName: '',
    quantity: '',
    unitPrice: '',
    submissionDate: '',
    supplierName: '',
    companyName: '',
    city: '',
    email: '',
    country: '',
    state: '',
    phoneCode: '',
    phoneNumber: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      const { name, value } = action.payload;
      state.formValues[name] = value;
    },
    resetForm: (state) => {
      state.formValues = { ...initialState.formValues };
    },
  },
});

export const { updateFormValue, resetForm } = formSlice.actions;
export default formSlice.reducer;
