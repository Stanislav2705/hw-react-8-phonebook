import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <main>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </main>
  );
}
