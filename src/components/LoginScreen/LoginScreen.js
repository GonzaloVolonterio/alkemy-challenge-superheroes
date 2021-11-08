import React, { useContext } from "react";
import { useFormik } from "formik";
import { login } from "../../helpers/login";
import { AuthContext } from "../../auth/AuthContext";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const initialValues = { email: "", password: "" };
  const onSubmit = (values) => {
    login(values, dispatch);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;

  return (
    <div className='login-screen'>
      <div className='form-container'>
        <h1>Alkemy Challenge</h1>
        <h9></h9>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email: </label>
            <input
              className='form-control mb-2'
              type='email'
              id='email'
              name='email'
              placeholder=''
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email ? (
              <small className='error alert-danger'>{errors.email}</small>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Constraseña: </label>
            <input
              className='form-control mb-2'
              type='password'
              id='password'
              name='password'
              placeholder=''
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <small className='error alert-danger'>{errors.password}</small>
            ) : null}
          </div>

          <button type='submit' className='btn btn-primary'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
