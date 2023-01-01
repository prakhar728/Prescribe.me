import { Box, Button, Checkbox, HStack, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
const Doctors = () => {
    const [currentDate, setCurrentDate] = useState("DD/MM/YYYY")
    const address = useSelector((state)=>state.wallet.address);
    const dispatch = useDispatch();
    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = dd + '/' + mm + '/' + yyyy;
        setCurrentDate(today)
    }, [])

    
    return (
        <Box  height="80vh" display="flex" >
            <Box width="100%" display="flex"  padding={10}  alignItems={"center"} justifyContent="center">
                <VStack  width="70%" border="1px" padding={4} borderRadius={10} borderColor="grey" height={"fit-content"} gap={"10px"}>
                    {/* PATIENTS DETAILS AND DATE */}
                    <Box display="flex" gap={10} width="80%" justifyContent="space-between" alignItems="center" margin={4}>
                        <Input placeholder="Patient's Wallet Address" width="50%" />
                        <Text border="1px" borderColor="grey" padding={2} textAlign={"Center"} borderRadius={10}>{currentDate}</Text>
                    </Box>
                    <Box width="80%" margin={4}>
                        <Textarea placeholder='Enter any additional comments that the patient should look out for!' />
                    </Box>
                    <Box>
                        <Button>Mark Visit!</Button>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}

export default Doctors