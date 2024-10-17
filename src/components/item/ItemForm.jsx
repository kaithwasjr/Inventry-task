import React from 'react';
import UniTextComp from '../Unicomponents/UniTextComp';
import './itemForm.css';

export default function ItemForm({ setFormValues, formValues, errors,  setErrors}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';

    switch (name) {
      case 'itemName':
        if (value.trim() === '') errorMsg = 'Item Name is required';
        else if (value.length > 50) errorMsg = 'Max 50 characters allowed';
        break;
      case 'quantity':
        if (!/^\d+$/.test(value)) errorMsg = 'Quantity must be a numeric value';
        break;
      case 'unitPrice':
        if (!/^\d+(\.\d{1,2})?$/.test(value)) 
          errorMsg = 'Enter a valid price (e.g., 10 or 10.99)';
        break;
      case 'submissionDate':
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) 
          errorMsg = 'Date must follow MM/DD/YYYY format';
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  return (
    <>
      <div className='forminputcontainer'>
        <UniTextComp
          name="itemName"
          Label="Item Name"
          PlaceHoder="Enter Item Name"
          warning={"Max 50 characters"}
          error={errors.itemName}
          value={formValues.itemName}
          onChange={handleChange}
        />
        <UniTextComp
          name="quantity"
          Label="Quantity"
          PlaceHoder="Enter Quantity"
          warning={"Numeric Value"}
          error={errors.quantity}
          value={formValues.quantity}
          onChange={handleChange}
        />
      </div>
      <div className='forminputcontainer'>
        <UniTextComp
          name="unitPrice"
          Label="Unit Price"
          PlaceHoder="Enter Unit Price"
          warning={"Numeric Value (USD)"}
          error={errors.unitPrice}
          value={formValues.unitPrice}
          onChange={handleChange}
        />
        <UniTextComp
          name="submissionDate"
          Label="Date of Submission"
          PlaceHoder="Select Date"
          warning={"Format - (MM/DD/YYYY)"}
          error={errors.submissionDate}
          value={formValues.submissionDate}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
