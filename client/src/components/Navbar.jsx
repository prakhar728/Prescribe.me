import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import logo from "../assets/logo-no-background.svg";
import { Image } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex>
      <Box>
        <Image  src={logo} alt="App Logo" boxSize="200px"  />
      </Box>
      <Box w="60%" display="flex" alignItems="center" justifyContent="space-between" p={3} ml={2} >
        <Link as={RouterLink} to='/home'>
          Home
        </Link>
        <Link as={RouterLink} to='/home'>
          FAQ
        </Link>
        <Link as={RouterLink} to='/home'>
          ABOUT
        </Link>
        <Link as={RouterLink} to='/home'>
          PROFILE
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar