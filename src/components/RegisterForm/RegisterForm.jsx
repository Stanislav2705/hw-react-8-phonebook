import { Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

import { useAuth } from 'hooks';
import ErrorForm from 'components/ErrorForm/ErrorForm';
import { FormStyled, Input, Label, StyledButton } from 'shared/FormikStyle/FormikStyle';

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

export default function RegisterForm() {
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
      <FormStyled>
        <Label>
          Username
          <Input type='text' name='name'/>
        </Label>
        <ErrorForm name='name'/>

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
