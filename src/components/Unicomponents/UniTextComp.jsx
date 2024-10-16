import React from 'react';
import './Unicomp.css';

export default function UniTextComp({ name, PlaceHoder, Label, warning, value, onChange }) {
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
      <p className='inputWarning'>{warning}</p>
    </div>
  );
}
