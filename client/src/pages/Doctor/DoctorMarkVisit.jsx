import { Box, Button, Checkbox, HStack, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ethers } from 'ethers'
import Nav from '../../components/DoctorPage/Nav'

const Doctors = () => {
    const [currentDate, setCurrentDate] = useState("DD/MM/YYYY")
    const {address,signer,instance} = useSelector((state)=>state.wallet);
    const [patientAddress, setpatientAddress] = useState("");
    const [comments, setcomments] = useState("");
    const dispatch = useDispatch();
    const [currentAddress, setcurrentAddress] = useState("0x0")
    const [instancesContract, setinstancesContract] = useState(null);
    const [place, setplace] = useState("");
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
        // const bytes32Place = ethers.utils.formatBytes32String(place);
        // const bytes32Addresss = ethers.utils.formatBytes32String(patientAddress);
        // const bytes32Comment = ethers.utils.formatBytes32String(comments);
       await (await instancesContract.markVisit(place,comments,patientAddress)).wait();
    }
   
    return (
            <Box width="100%" display="flex"  padding={10}   alignItems={"center"} justifyContent="center" height="60%">
                <VStack  width="70%" border="1px" padding={4} borderRadius={10} borderColor="grey" height={"fit-content"} gap={"10px"}>
                    {/* PATIENTS DETAILS AND DATE */}
                    <Box display="flex" gap={10} width="80%" justifyContent="space-between" alignItems="center" margin={4}>
                        <Input placeholder="Patient's Wallet Address" width="50%" value={patientAddress} onChange={e=>setpatientAddress(e.target.value)} size="lg"/>
                        <Text border="1px" borderColor="grey" padding={2} textAlign={"Center"} borderRadius={10}>{currentDate}</Text>
                    </Box>
                    <Box width="80%" margin={4} display="flex" flexDirection={"column"} gap="24px">
                        <Textarea placeholder='Enter the place of the organisation' size="md" value={place} onChange={e=>setplace(e.target.value)}/>
                        <Textarea placeholder='Enter any additional comments that the patient should look out for!' value={comments} onChange={e=>setcomments(e.target.value)} siez="lg"/>
                    </Box>
                    <Box>
                        <Button onClick={markVisit}>Mark Visit!</Button>
                    </Box>
                </VStack>
            </Box>
    )
}

export default Doctors