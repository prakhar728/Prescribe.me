import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const DoctorOrPatient = () => {
  
  return (
    <Flex  height="80vh" >
      <Center width="100%">
        <Box  width="50%" display="flex" justifyContent="space-between">
          <Box border="1px" width="40%" height="20vw"
            display="flex" alignItems="center" justifyContent="center" borderRadius={"20px"}>
            <Link as={RouterLink} to="/app/doctor/markvisit" fontSize={"3xl"}> DOCTOR </Link>
          </Box>
          <Box border="1px" width="40%" height="20vw" display="flex" alignItems="center" justifyContent="center" borderRadius={"20px"} >
            <Link as={RouterLink} to="/app/patient" fontSize={"3xl"}> PATIENT </Link>
          </Box>
        </Box>
      </Center>
    </Flex>
  )
}

export default DoctorOrPatient