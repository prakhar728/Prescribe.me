import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const FeatureCard = ({title,line,src,uniqueKey}) => {
  console.log(src);
  return (
    <Box key={uniqueKey} w="25%" display="flex" flexDirection={"column"} alignItems="center" bgGradient={"radial(#82AAE3,#14354C)"} borderRadius="20px">
        <Image src={src} alt="Feature card" width="80%"/>
        <Text as="h2" fontSize="xl" >{title}</Text>
        <Spacer />
        <Text as="h3" fontSize="md">{line}</Text>
    </Box>
  )
}

export default FeatureCard