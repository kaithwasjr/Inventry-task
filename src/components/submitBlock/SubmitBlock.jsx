import React from 'react'
import './SubmitBlock.css'
export default function SubmitBlock({handleSubmit}) {
  return (
    <div className='FormSwitchContainer'>
      <div className='formHeading'>
         Submitted Data
      <p className='submitBlockPera'>The data submitted by users will be displayed below</p>
      <button name="submit" onClick={handleSubmit} className='submitBlockButton' >Save Changes</button>
      </div>
    </div>
  )
}
