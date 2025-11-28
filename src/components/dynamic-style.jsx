import React, { useEffect, useState } from 'react'

const DynamicStyle = () => {

  const [value, setValue] = useState('');
  const [validValue, setValidValue] = useState(false);


  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  }
  useEffect(() => {
    if (value.length < 2) {
      setValidValue(false);
    } else {
      setValidValue(true);
    }
  }, [value]);

  return (
    <div className={`card ${value !== "" && (validValue ? 'valid' : 'invalid')}`}>
      <input className='form-control' onChange={handleChange} type="text" name='name' id='name' placeholder='Enter minimum 2 characters' />
      {value !== "" && (<p className='mt-3'>{validValue ? "Input value is valid." : "Input value is not valid."}</p>)}
    </div>
  )
}

export default DynamicStyle