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

  const handleSubmit = async () => {
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

  console.log(formValues, "formValues");
  

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
            <ItemForm formValues={formValues} setFormValues={setFormValues} />
          </div>
        </>
      )}

      {isSupplierChecked && (
        <>
          <div className='formHeading'>Supplier Details</div>
          <div className='formContainer'>
            <SupplierForm formValues={formValues} setFormValues={setFormValues} />
          </div>
        </>
      )}
    </div>

<SubmitBlock handleSubmit={handleSubmit}/>
</>

  );
}
