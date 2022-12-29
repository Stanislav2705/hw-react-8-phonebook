import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operation';

import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestrictedRoute from 'routes/RestrictedRoute/RestrictedRoute';

import { useAuth } from 'hooks';
import Loader from 'shared/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'))
const LoginPage = lazy(() => import('../../pages/Login/Login'))
const ContactPage = lazy(() => import('../../pages/PhoneBook/PhoneBook'))

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (<Loader/>) : (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route
          path='/register'
          element={<RestrictedRoute
            component={RegisterPage}
            redirectTo='/contacts'
          />}
        />
        <Route
          path='/login'
          element={<RestrictedRoute
            component={LoginPage}
            redirectTo='/contacts'
          />}
        />
        <Route
          path='/contacts'
          element={<PrivateRoute
            component={ContactPage}
            redirectTo='/login'
          />}
        />
      </Route>
    </Routes>
  )
}

