import React from 'react';
import UniTextComp from '../Unicomponents/UniTextComp';
import UniSelectComp from '../Unicomponents/UniSelectComp';

export default function SupplierForm({ setFormValues, formValues, errors, setErrors }) {
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
        else if (value.length > 50) errorMsg = 'Max 50 characters allowed';
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
          warning={"Max 50 characters"}
          error={errors.supplierName}
          value={formValues.supplierName}
          onChange={handleChange}
        />
        <UniTextComp
          name="companyName"
          Label="Company Name"
          PlaceHoder="Enter Company Name"
          warning={"Max 50 characters"}
          error={errors.companyName}
          value={formValues.companyName}
          onChange={handleChange}
        />
      </div>

      <div className='forminputcontainer'>
        <UniTextComp
          name="email"
          Label="Email Address"
          PlaceHoder="Enter email address"
          warning={"Valid email format"}
          error={errors.email}
          value={formValues.email}
          onChange={handleChange}
        />
        <UniTextComp
          name="city"
          Label="City"
          PlaceHoder="Enter City"
          warning={"Max 50 characters"}          
          error={errors.city}
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
          error={errors.country}
          onChange={handleChange}
          warning={errors.country}
        />

        <UniSelectComp
          name="state"
          label="State"
          options={stateOptions[formValues.country] || []}
          value={formValues.state}
          error={errors.state}
          onChange={handleChange}
          warning={errors.state}
        />
      </div>
    </>
  );
}
