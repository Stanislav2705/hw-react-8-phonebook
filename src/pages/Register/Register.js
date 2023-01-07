import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <HelmetProvider>
      <main>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </main>
    </HelmetProvider>
  );
}
