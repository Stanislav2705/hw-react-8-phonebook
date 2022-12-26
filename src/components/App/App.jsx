// import { useDispatch } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operation';
import Loader from 'shared/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'))

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (!isRefreshing ? (<Loader/>) : (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  ))
}

