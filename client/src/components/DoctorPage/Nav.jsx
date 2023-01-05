import { Box, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink as RouterLink } from "react-router-dom";
const Nav = () => {
  let activeStyle = {
    background: "rgba(130, 170, 227, 0.49)"
  };
  return (
    <Box w="20%"  display={"flex"} flexDirection="column" h="60%" alignItems={"center"} justifyContent="center" marginLeft={"-1vw"}>
      <Box display={"flex"}  flexDirection="column" border='1px' w="100%" padding={"10%"} borderRadius={"20px"}>
        <Link as={RouterLink} to="/app/doctor/markvisit" fontSize={"3xl"} w="100%" textAlign={"center"} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } margin={"6px"} borderRadius="20px">Mark Visits</Link>
        <Link as={RouterLink} to="/app/doctor/viewRecord" fontSize={"3xl"} w="100%" textAlign={"center"} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } margin={"6px"} borderRadius="20px">View Record</Link>
      </Box>
    </Box>
  )
}

export default Nav