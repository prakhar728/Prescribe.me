import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const FeatureCard = ({ title, line, src, uniqueKey }) => {
  return (
    <Box key={uniqueKey} w="20%"  background={"#82AAE3"} borderRadius="20px" h="80%" display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"} >
      <Box w="90%" h="90%" display="flex" flexDirection={"column"} alignItems="center" border="1px" borderRadius={"10px"} >
        <Image src={src} alt="Feature card" width="70%" />
        <Text as="h2" fontSize="xl" >{title}</Text>
        <Text as="h3" fontSize="md">{line}</Text>
      </Box>

    </Box>
  )
}

export default FeatureCard