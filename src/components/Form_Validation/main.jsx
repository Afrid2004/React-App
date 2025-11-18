import React, { useState } from 'react';
import FormValidateYup from './form-validate-yup';
import ViewFormData from './view-form-data';

const Main = () => {
  const p = <div className='card' style={{ minWidth: "450px" }}>
    <h2 className='mb-3'>User Details</h2>
    <p>No Data found. Please Enter your Name, Email and Password to show your data.</p>
  </div>
  const [formData, setFormData] = useState('');
  const handleFormData = (data) => {
    setFormData(data);
  }
  return (
    <div className='d-flex gap-2'>
      <FormValidateYup onReceiveData={handleFormData} />
      {formData ? <ViewFormData data={formData} /> : p}
    </div>
  )
}

export default Main