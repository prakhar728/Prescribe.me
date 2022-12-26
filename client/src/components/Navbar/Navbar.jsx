import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Box w="60%" display="flex" alignItems="center" justifyContent="space-between"  p={3} ml={2} >
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
  )
}

export default Navbar