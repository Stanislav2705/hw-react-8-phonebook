import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Login() {
  return (
    <HelmetProvider>
      <main>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </main>
    </HelmetProvider>
  );
}
