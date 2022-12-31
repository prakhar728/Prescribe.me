import React from 'react'
import { Box, Button, Center, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const App = () => {
  return (
    <Flex  height="80vh">
      <Center width="100%">
        <Box  width="50%" display="flex" justifyContent="space-between">
          <Box border="1px" width="40%" height="20vw"
            display="flex" alignItems="center" justifyContent="center">
            <Link as={RouterLink} to="/app/doctor"> DOCTOR </Link>
          </Box>
          <Box border="1px" width="40%" height="20vw" display="flex" alignItems="center" justifyContent="center" >
            <Link as={RouterLink} to="patient"> Patient </Link>
          </Box>
        </Box>
      </Center>
    </Flex>
  )
}

export default App