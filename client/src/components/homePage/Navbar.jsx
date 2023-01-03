import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, Spacer } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import logo from "../../assets/Prescribe_2.svg";
import { Image } from '@chakra-ui/react';
const Navbar = () => {
  let activeStyle = {
    background: "rgba(130, 170, 227, 0.49)"
  };

  const routes = [
    {
      name:"Home",
      link:"/"
    },
    {
      name:"FAQ",
      link:"/FAQ"
    },
    {
      name:"CONTACT",
      link:"/CONTACT"
    },
  ]
  return (
    <Box  >
      <Box w="100%" height="18vh" display={"flex"} alignItems="center" justifyContent={"center"}  >
        <Box marginLeft={4}>
          <Image src={logo} alt="App Logo" />
        </Box>
        <Spacer />
        <Spacer />
        <Box w="40%" display="flex" alignItems="center" justifyContent="space-between" p={3} ml={2} >
          {routes.map((route,key)=>{
            return(
              <Link as={RouterLink} to={route.link} _hover={{
                background: "rgba(130, 170, 227, 0.49)"
              }}
              _active={{
                background: "rgba(130, 170, 227, 0.49)"
              }}
              style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
               paddingLeft={"10px"} paddingRight="10px" paddingTop="5px" paddingBottom="5px" borderRadius="10px" border="1px" borderColor={"transparent"} fontSize="xl">
                {route.name}
              </Link>
            )
          })}
        </Box>
        <Spacer />
        <Box  w="15%" padding="2%" display={"flex"} alignItems="center" justifyContent={"center"}  >
          <Button variant="solid" backgroundColor="#82AAE3" color="black"
            _hover={{
              background: "#82AAE3",
              color: "#black",
            }} 
            padding="12%"
            borderRadius={40}
          >
            <Link as={RouterLink} to="/app/choice" fontSize={"xl"} padding={"2%"}>  Go to the App</Link>
          </Button>
        </Box>
        
      </Box>
    </Box>
  )
}

export default Navbar