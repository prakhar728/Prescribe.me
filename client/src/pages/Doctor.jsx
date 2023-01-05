import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/DoctorPage/Nav'

const Doctor = () => {
    return (
        <Box height="80vh" display="flex" >
            <Nav />
            <Outlet />
        </Box>
    )
}

export default Doctor