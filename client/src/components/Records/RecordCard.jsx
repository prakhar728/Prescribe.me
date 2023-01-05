import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const RecordCard = ({ Place, Comments, Time }) => {
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    useEffect(() => {
        setdate( Time.toLocaleDateString() );
        settime(Time.toLocaleTimeString());
    }, [])

    return (
        <Box  display={"flex"} w="90%" borderRadius={"20px"} background="#F0f0f0" marginTop="24px" padding="24px"> 
            <Box w="50%" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
                <Text fontSize={"2xl"}>{Place}</Text>
                <Text fontSize={"2xl"}>{Comments}</Text>
            </Box>
            <Box w="50%" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
                <Text fontSize={"xl"}>{date && date + ' ' + time}</Text>
            </Box>

        </Box>
    )
}

export default RecordCard