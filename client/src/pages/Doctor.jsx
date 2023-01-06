import { Box } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Nav from '../components/DoctorPage/Nav'
import NotADoctor from "../components/DoctorPage/NotADoctor";
const Doctor = () => {
        const {address,instance} = useSelector(state=>state.wallet);
    const [isTrustedOrganisation, setisTrustedOrganisation] = useState(false)
    const checkOrganisation = async() =>{

        const isTrusted = await instance.isTrusted(address);
        console.log(isTrusted);
        setisTrustedOrganisation(isTrusted);
    }
    useEffect(() => {
        checkOrganisation();
    }, [])
    if(!isTrustedOrganisation)
    return(<NotADoctor /> )
    
    return (
        <Box height="80vh" display="flex" >
            <Nav />
            <Outlet />
        </Box>
    )
}
    

export default Doctor