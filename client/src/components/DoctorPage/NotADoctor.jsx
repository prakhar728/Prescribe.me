import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const NotADoctor = () => {
  return (
    <Box h="80vh" display="flex" alignItems="center" justifyContent="center">
        <Text size={"4xl"}>Oops! It seems you haven't been added a trusted organization by us yet! You can request to be added on our discord.</Text>
    </Box>
  )
}

export default NotADoctor