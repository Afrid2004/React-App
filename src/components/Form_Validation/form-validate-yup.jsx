import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { validate } from 'uuid';

const FormValidateYup = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object(
      {
        name: yup.string().min(2).required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).required()
      },
    ),
    onSubmit: (values, { resetForm }) => {
      props.onReceiveData(values);
      resetForm({ values: '' });
    }

  });

  const nameError = formik.touched.name && formik.errors.name && (<span className='d-flex px-2 py-1' style={{ width: "100%", background: "rgba(255, 0, 0, 0.31)", color: "red", border: "1px solid #ff00004a" }}>{formik.errors.name}</span>);
  const emailError = formik.touched.email && formik.errors.email && (<span className='d-flex px-2 py-1' style={{ width: "100%", background: "rgba(255, 0, 0, 0.31)", color: "red", border: "1px solid #ff00004a" }}>{formik.errors.email}</span>);
  const passError = formik.touched.password && formik.errors.password && (<span className='d-flex px-2 py-1' style={{ width: "100%", background: "rgba(255, 0, 0, 0.31)", color: "red", border: "1px solid #ff00004a" }}>{formik.errors.password}</span>);

  return (
    <div className='card' style={{ minWidth: "450px" }}>
      <h2 className='mb-3'>
        Register
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control mb-2' name='name' id='names' placeholder='Enter your name' required />
          {nameError}
        </div>
        <div className='mb-3'>
          <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control mb-2' name='email' id='emails' placeholder='Enter your email' required />
          {emailError}
        </div>
        <div className='mb-3'>
          <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control mb-2' name='password' id='passwords' placeholder='Enter password' required />
          {passError}
        </div>
        <button type='submit' onSubmit={formik.handleSubmit} className='btn btn-info'>Sign Up</button>
      </form>
    </div>
  )
}

export default FormValidateYup