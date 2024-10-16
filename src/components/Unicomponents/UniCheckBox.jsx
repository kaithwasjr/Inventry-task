import React from 'react';

export default function UniCheckBox({ label, checked, onChange }) {
  return (
    <div className='CheckBoxInputContainer'>
      <input
        type='checkbox'
        className='Unicheckbox'
        name={label}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label} className='UnicheckboxLabel'>{label}</label>
    </div>
  );
}
