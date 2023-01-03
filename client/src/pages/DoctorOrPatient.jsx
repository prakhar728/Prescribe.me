import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar2';
import MainApp from "../pages/MainApp";
import { useDispatch, useSelector } from 'react-redux'
import ConnectToWallet from '../components/ConnectToWallet';

const DoctorOrPatient = () => {
  const {address,signer,instance} = useSelector((state)=>state.wallet);
  const dispatch = useDispatch();
  const [currentAddress, setcurrentAddress] = useState("0x0")
  const [instancesContract, setinstancesContract] = useState("")
  useEffect(() => {
    setcurrentAddress(address);
    setinstancesContract(instance)
  }, [address,instance])
  return (
    <Box width="100%" height="100vh">
        <Navbar />
        { currentAddress=="0x0"? <ConnectToWallet />: <Outlet />  } 
     </Box>
  )
}

export default DoctorOrPatient