import { Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

import { useAuth } from 'hooks';
import { FormStyled, Input, Label, StyledButton } from 'shared/FormikStyle/FormikStyle';
import ErrorForm from 'components/ErrorForm/ErrorForm';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = values => {
    dispatch(logIn(values));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Email
          <Input type='email' name='email'/>
        </Label>
        <ErrorForm name='email'/>

        <Label>
          Password
          <Input type='password' name='password'/>
        </Label>
        <ErrorForm name='password'/>

        {error && <div>{error}</div>}

        <StyledButton type='submit'>Register</StyledButton>
      </FormStyled>
    </Formik>
  )
}
