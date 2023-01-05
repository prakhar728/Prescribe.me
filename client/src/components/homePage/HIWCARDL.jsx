import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HIWCARD = ({img,title,info}) => {
  return (
    <Box w="80%" marginTop={"4vh"} display="flex" >
        <Box w="50%"  display={"flex"} alignItems="center" justifyContent={"center"} >
            <Image src={img} alt="Graphic" w="70%" />
        </Box>
        <Box w="50%" display={"flex"} flexDirection="column" justifyContent={"space-evenly"}>
            <Text fontSize={"4xl"} fontWeight="bold" textAlign={"center"}>{title}</Text>
            <Text fontSize={"2xl"} textAlign={"center"}>{info}</Text>
        </Box>
    </Box>
  )
}

export default HIWCARD