import React from 'react';
import './Unicomp.css';

export default function UniTextComp({ name, PlaceHoder, Label, warning, value, onChange, error }) {
  return (
    <div className='InputUniContainer'>
      <label className='inputLabel'>{Label}</label>
      <input
        type='text'
        name={name}
        placeholder={PlaceHoder}
        className='UniTextComp'
        value={value}
        onChange={onChange}
      />
    <div className='wornig_error'>
    <p className='inputWarning'>{warning}</p>
      <p className='inputError'>{error}</p>
      </div>
    </div>
  );
}
