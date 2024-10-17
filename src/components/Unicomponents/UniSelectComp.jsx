import React from 'react';

export default function UniSelectComp({ 
  name, 
  label, 
  options = [], 
  value, 
  onChange, 
  disabled = false ,
  error
}) {
  return (
    <div className='InputUniContainer'>
      <label className='inputLabel'>{label}</label>
      <select 
        name={name} 
        value={value || ""} 
        onChange={onChange} 
        disabled={disabled}
        className='UniTextComp'

      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='wornig_error'>
      <p className='inputError'>{error}</p>
      </div>
    </div>
  );
}
