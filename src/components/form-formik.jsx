import React from "react";
import { useFormik } from "formik";

const FormFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert('Name: ' + values.name + ', Email: ' + values.email);
      resetForm({ values: "" });
    }
  });

  return (
    <div style={{ maxWidth: "450px" }} className="card">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          type="text"
          className="form-control mb-3"
          name="name"
          id="name"
          value={formik.values.name}
          placeholder="Enter your name"
          required
        />
        <input
          onChange={formik.handleChange}
          type="email"
          className="form-control mb-3"
          name="email"
          id="email"
          value={formik.values.email}
          placeholder="Enter your email"
          required
        />
        <input
          onChange={formik.handleChange}
          type="password"
          className="form-control mb-3"
          name="password"
          id="password"
          value={formik.values.password}
          placeholder="Enter password"
          required
        />
        <button
          onSubmit={formik.handleSubmit}
          type="submit"
          className="btn btn-info"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormFormik;
