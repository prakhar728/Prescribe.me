import { Box, Link } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom";
const Nav = () => {
  return (
    <Box w="100%" border="1px" display={"flex"} padding={"1%"} >
        <Link as={RouterLink} to="/app/doctor/" fontSize={"3xl"} w="50%" textAlign={"center"}>Mark Visits</Link>
        <Link as={RouterLink} to="/app/doctor/viewRecord" fontSize={"3xl"} w="50%" textAlign={"center"}>View Record</Link>
    </Box>
  )
}

export default Nav