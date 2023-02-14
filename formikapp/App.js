import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) {
        errors.password = 'Field required';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert('Login Successful');
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <div>Username:</div>
          <Field type="email" name="email" id="emailField" />
          <ErrorMessage name="email" component="div" id="emailError" />
        </div>
        <div>
        <div>password:</div>
          <Field type="password" name="password" id="pswField" />
          <ErrorMessage name="password" component="div" id="pswError" />
        </div>
        <button type="submit" id="submitBtn" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default App;
