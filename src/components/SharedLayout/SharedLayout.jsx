import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import AppBar from "components/AppBar/AppBar";
import Loader from "shared/Loader/Loader";



export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet/>
      </Suspense>
    </div>
  )
}
