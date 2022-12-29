import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import AppBar from "components/AppBar/AppBar";
import Loader from "shared/Loader/Loader";
import Box from "shared/Box/Box";



export default function SharedLayout() {
  return (
    <Box maxWidth='1200px' mx='auto' my={0} px={4} py={0} >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet/>
      </Suspense>
    </Box>
  )
}
