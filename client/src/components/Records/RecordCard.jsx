import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const RecordCard = ({ Place, Comments, Time }) => {
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    useEffect(() => {
        setdate(Time.toLocaleDateString());
        settime(Time.toLocaleTimeString());
    }, [])

    return (
        <Box border="1px" display={"flex"}>
            <Box w="50%" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
                <Text>{Place}</Text>
                <Text>{Comments}</Text>
            </Box>
            <Box w="50%" display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
                <Text>{date && date + ' ' + time}</Text>
            </Box>

        </Box>
    )
}

export default RecordCard