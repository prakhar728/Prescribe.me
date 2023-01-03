import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PatientSide = () => {
    return (
        <Box>
            The Two sides
            <Outlet />
        </Box>
    )
}

export default PatientSide