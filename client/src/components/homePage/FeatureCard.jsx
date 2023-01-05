import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const FeatureCard = ({ title, line, src, uniqueKey }) => {
  return (
    <Box key={uniqueKey} w="18%"  background={"#82AAE3"} borderRadius="20px" h="80%" display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"} padding="1%" >
      <Box w="100%" h="100%" display="flex" flexDirection={"column"} alignItems="center" border="1px" borderRadius={"10px"} padding="5%" justifyContent={"space-around"} >
        <Box display={"flex"} alignItems="center" justifyContent={"center"}  height="50%">
        <Image src={src} alt="Feature card" width="70%" />
        </Box>
        <Text as="h2" fontSize="4xl" fontWeight={"bold"} color="#F7F5F2" >{title.toUpperCase()}</Text>
        <Text as="h3" fontSize="xl" textAlign={"center"} color="#f2f0ed">{line}</Text>
      </Box>
    </Box>
  )
}

export default FeatureCard