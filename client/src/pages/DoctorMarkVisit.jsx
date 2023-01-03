import { Box, Button, Checkbox, HStack, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConnectToWallet from '../components/ConnectToWallet';
import { ethers } from 'ethers'
import Nav from '../components/DoctorPage/Nav'

const Doctors = () => {
    const [currentDate, setCurrentDate] = useState("DD/MM/YYYY")
    const {address,signer,instance} = useSelector((state)=>state.wallet);
    const [patientAddress, setpatientAddress] = useState("");
    const [comments, setcomments] = useState("");
    const dispatch = useDispatch();
    const [currentAddress, setcurrentAddress] = useState("0x0")
    const [instancesContract, setinstancesContract] = useState(null);

    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = dd + '/' + mm + '/' + yyyy;
        setCurrentDate(today)
    }, [])

    useEffect(() => {
      setcurrentAddress(address);
      setinstancesContract(instance)
    }, [address,instance])
    
    const markVisit = async() =>{
        const bytes32Place = ethers.utils.formatBytes32String("Random Place for now");
        // const bytes32Addresss = ethers.utils.formatBytes32String(patientAddress);
        const bytes32Comment = ethers.utils.formatBytes32String(comments);
       await (await instancesContract.markVisit(bytes32Place,bytes32Comment,patientAddress)).wait();
    }
    if(currentAddress=="0x0")
    return(
        <ConnectToWallet />
    )
    return (
        <Box  height="80vh" display="flex" border="1px" flexDirection={"column"} >
            <Nav />
            <Box width="100%" display="flex"  padding={10}   alignItems={"center"} justifyContent="center" height="100%">
                <VStack  width="70%" border="1px" padding={4} borderRadius={10} borderColor="grey" height={"fit-content"} gap={"10px"}>
                    {/* PATIENTS DETAILS AND DATE */}
                    <Box display="flex" gap={10} width="80%" justifyContent="space-between" alignItems="center" margin={4}>
                        <Input placeholder="Patient's Wallet Address" width="50%" value={patientAddress} onChange={e=>setpatientAddress(e.target.value)} />
                        <Text border="1px" borderColor="grey" padding={2} textAlign={"Center"} borderRadius={10}>{currentDate}</Text>
                    </Box>
                    <Box width="80%" margin={4}>
                        <Textarea placeholder='Enter any additional comments that the patient should look out for!' value={comments} onChange={e=>setcomments(e.target.value)}/>
                    </Box>
                    <Box>
                        <Button onClick={markVisit}>Mark Visit!</Button>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}

export default Doctors