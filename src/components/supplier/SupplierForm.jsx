import React, { useState } from 'react';
import UniTextComp from '../Unicomponents/UniTextComp';
import UniSelectComp from '../Unicomponents/UniSelectComp';

export default function SupplierForm({ setFormValues, formValues }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validate the field on every change
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';

    switch (name) {
      case 'supplierName':
        if (value.trim() === '') errorMsg = 'Supplier Name is required';
        else if (value.length > 50) errorMsg = 'Max 50 characters allowed';
        break;
      case 'companyName':
        if (value.trim() === '') errorMsg = 'Company Name is required';
        else if (value.length > 50) errorMsg = 'Max 50 characters allowed';
        break;
      case 'email':
        if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
          errorMsg = 'Enter a valid email address';
        break;
      case 'city':
        if (value.trim() === '') errorMsg = 'City is required';
        break;
      case 'country':
        if (!value) errorMsg = 'Please select a country';
        break;
      case 'state':
        if (!value) errorMsg = 'Please select a state';
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  const countryOptions = ["India", "USA", "Canada", "Australia"];
  const stateOptions = {
    India: ["Maharashtra", "Karnataka", "Delhi"],
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "Alberta"],
    Australia: ["New South Wales", "Victoria", "Queensland"]
  };

  return (
    <>
      <div className='forminputcontainer'>
        <UniTextComp
          name="supplierName"
          Label="Supplier Name"
          PlaceHoder="Enter Supplier Name"
          warning={errors.supplierName || "Max 50 characters"}
          value={formValues.supplierName}
          onChange={handleChange}
        />
        <UniTextComp
          name="companyName"
          Label="Company Name"
          PlaceHoder="Enter Company Name"
          warning={errors.companyName || "Max 50 characters"}
          value={formValues.companyName}
          onChange={handleChange}
        />
      </div>

      <div className='forminputcontainer'>
        <UniTextComp
          name="email"
          Label="Email Address"
          PlaceHoder="Enter email address"
          warning={errors.email || "Valid email format"}
          value={formValues.email}
          onChange={handleChange}
        />
        <UniTextComp
          name="city"
          Label="City"
          PlaceHoder="Enter City"
          warning={errors.city || "Max 50 characters"}
          value={formValues.city}
          onChange={handleChange}
        />
      </div>
      <div className='forminputcontainer'>
        <UniSelectComp
          name="country"
          label="Country"
          options={countryOptions}
          value={formValues.country}
          onChange={handleChange}
          warning={errors.country}
        />

        <UniSelectComp
          name="state"
          label="State"
          options={stateOptions[formValues.country] || []}
          value={formValues.state}
          onChange={handleChange}
          disabled={!formValues.country}
          warning={errors.state}
        />
      </div>
    </>
  );
}
