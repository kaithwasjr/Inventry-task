import React, { useState } from 'react';
import ItemForm from '../item/ItemForm';
import SupplierForm from '../supplier/SupplierForm';
import UniCheckBox from '../Unicomponents/UniCheckBox';
import './FormSwitch.css';
import SubmitBlock from '../submitBlock/SubmitBlock';

export default function FormSwitch() {
  const [isItemChecked, setIsItemChecked] = useState(false);
  const [isSupplierChecked, setIsSupplierChecked] = useState(false);
  const [formValues, setFormValues] = useState({
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
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (isItemChecked) {
      if (!formValues.itemName.trim()) {
        newErrors.itemName = 'Item Name is required';
        valid = false;
      }
      if (!/^\d+$/.test(formValues.quantity)) {
        newErrors.quantity = 'Quantity must be a numeric value';
        valid = false;
      }
      if (!/^\d+(\.\d{1,2})?$/.test(formValues.unitPrice)) {
        newErrors.unitPrice = 'Enter a valid price (e.g., 10 or 10.99)';
        valid = false;
      }
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formValues.submissionDate)) {
        newErrors.submissionDate = 'Date must follow MM/DD/YYYY format';
        valid = false;
      }
    }


    if (isSupplierChecked) {
      if (!formValues.supplierName.trim()) {
        newErrors.supplierName = 'Supplier Name is required';
        valid = false;
      }
      if (!formValues.companyName.trim()) {
        newErrors.companyName = 'Company Name is required';
        valid = false;
      }
      if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
        newErrors.email = 'Enter a valid email address';
        valid = false;
      }
      if (!formValues.city.trim()) {
        newErrors.city = 'City is required';
        valid = false;
      }
      if (!formValues.country) {
        newErrors.country = 'Please select a country';
        valid = false;
      }
      if (!formValues.state) {
        newErrors.state = 'Please select a state';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };


  const handleSubmit = async () => {

    if (!validateForm()) {
      alert('Please correct the errors before submitting the form.');
      return;
    }

    const payload = {
      itemDetails: {
        itemName: formValues.itemName,
        quantity: formValues.quantity,
        unitPrice: formValues.unitPrice,
        currency: "$",
        submissionDate: formValues.submissionDate
      },
      supplier: {
        supplierName: formValues.supplierName,
        companyName: formValues.companyName,
        email: formValues.email,
        phoneCode: formValues.phoneCode,
        phoneNumber: formValues.phoneNumber,
        countryId: "1",
        stateId: "1",
        cityId: "1"
      }
    };

    try {
      const response = await fetch(
        'https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert('Form submitted successfully!');
        console.log('Response:', data);
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  console.log(formValues, "formValues", errors);


  return (
    <>
      <div className='FormSwitchContainer'>
        <div className='SwitchContainer'>
          <UniCheckBox
            label="Item"
            checked={isItemChecked}
            onChange={(e) => setIsItemChecked(e.target.checked)}
          />
          <UniCheckBox
            label="Supplier"
            checked={isSupplierChecked}
            onChange={(e) => setIsSupplierChecked(e.target.checked)}
          />
        </div>

        {isItemChecked && (
          <>
            <div className='formHeading'>Item Details</div>
            <div className='formContainer'>
              <ItemForm formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors} />
            </div>
          </>
        )}

        {isSupplierChecked && (
          <>
            <div className='formHeading'>Supplier Details</div>
            <div className='formContainer'>
              <SupplierForm formValues={formValues} setFormValues={setFormValues} errors={errors} setErrors={setErrors} />
            </div>
          </>
        )}
      </div>

      <SubmitBlock handleSubmit={handleSubmit} />
    </>

  );
}
