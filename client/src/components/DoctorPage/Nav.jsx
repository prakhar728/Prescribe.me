import { Box, Link } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom";
const Nav = () => {
  return (
    <Box w="100%" border="1px">
        <Link as={RouterLink} to="/app/doctor/">Mark Visits</Link>
        <Link as={RouterLink} to="/app/doctor/viewRecord">View Record</Link>
    </Box>
  )
}

export default Nav