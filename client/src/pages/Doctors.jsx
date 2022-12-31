import { Box, Checkbox, HStack, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
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
            <Box width="100%" display="flex" justifyContent="center" padding={10}>
                <VStack  width="70%" border="1px" padding={4} borderRadius={10} borderColor="grey">
                    {/* PATIENTS DETAILS AND DATE */}
                    <Box display="flex" gap={10} width="80%" justifyContent="space-between" alignItems="center">
                        <Input placeholder="Patient's Wallet Address" width="50%" />
                        <Text border="1px" borderColor="grey" padding={2} textAlign={"Center"} borderRadius={10}>{currentDate}</Text>
                    </Box>
                    {/* TAKING NOTES OF MEDICINES */}
                    <Box width="80%" border="1px" display="flex" justifyContent="space-evenly" alignItems="center" padding={1} borderRadius={10} borderColor="grey" height="10%">
                        <Text>1</Text>
                        <Input placeholder="Medicine Name" width="50%" />
                        <Stack spacing={5} direction='row'>
                            <Checkbox >D</Checkbox>
                            <Checkbox  >
                                E
                            </Checkbox>
                            <Checkbox  >
                                N
                            </Checkbox>
                        </Stack>
                        <NumberInput defaultValue={1} width="10%">
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                    <Box width="80%" border="1px"  padding={1} borderRadius={10} display="flex" justifyContent="center" alignItems="center" height="10%" borderColor="grey" >
                        <AddIcon  border="1px" boxSize={10} borderRadius={4} padding={3} borderColor="grey"/>
                    </Box>
                    <Box width="80%">
                        <Textarea placeholder='Enter any additional comments that the patient should look out for!' />
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}

export default Doctors