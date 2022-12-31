import { Box } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar2';
import MainApp from "../pages/MainApp"
const DoctorOrPatient = () => {
  return (
    <Box width="100%" height="100vh">
        <Navbar />
        <Outlet />
     </Box>
  )
}

export default DoctorOrPatient