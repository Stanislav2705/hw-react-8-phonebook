import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

import { useAuth } from 'hooks';
import ErrorForm from 'components/ErrorForm/ErrorForm';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .required('Please fill in the name'),

  email: yup
    .string()
    .email('Email must be a valid')
    .required('Please fill in the email'),

  password: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .required('Please fill in the password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {error} = useAuth();

  const handleSubmit = values => {
    dispatch(register(values));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Username
          <Field type='text' name='name'/>
        </label>
        <ErrorForm name='name'/>

        <label>
          Email
          <Field type='email' name='email'/>
        </label>
        <ErrorForm name='email'/>

        <label>
          Password
          <Field type='password' name='password'/>
        </label>
        <ErrorForm name='password'/>

        {error && <div>{error}</div>}

        <button type='submit'>Register</button>
      </Form>
    </Formik>
  )
}
