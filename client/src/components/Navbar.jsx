import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, Spacer } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import logo from "../assets/Prescribe_2.svg";
import { Image } from '@chakra-ui/react';
import { networks } from '../assets/networks';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddress, updateSigner } from '../features/WalletSlice';
import { ethers } from "ethers";
const Navbar = () => {
  const [accounts, setCurrentAccount] = useState("");
  const [Network, setNetwork] = useState("")


  return (
    <Flex>
      <Center w="100%" height="18vh"   >
        <Box marginLeft={4}>
          <Image src={logo} alt="App Logo" />
        </Box>
        <Spacer />
        <Spacer />
        
        <Box w="40%" display="flex" alignItems="center" justifyContent="space-between"  p={3} ml={2} >
          <Link as={RouterLink} to='/home' _hover={{
            background:"rgba(130, 170, 227, 0.49)"
          }} paddingLeft={"10px"} paddingRight="10px" paddingTop="5px"  paddingBottom="5px"  borderRadius="10px" border="1px" borderColor={"transparent"}> 
            Home
          </Link>
          <Link as={RouterLink} to='/home' _hover={{
            background:"rgba(130, 170, 227, 0.49)"
          }}paddingLeft={"10px"} paddingRight="10px" paddingTop="5px"  paddingBottom="5px"    borderRadius="10px" border="1px" borderColor={"transparent"}>
            FAQ
          </Link>
          <Link as={RouterLink} to='/home' _hover={{
            background:"rgba(130, 170, 227, 0.49)"
          }}paddingLeft={"10px"} paddingRight="10px" paddingTop="5px"  paddingBottom="5px"    borderRadius="10px" border="1px" borderColor={"transparent"}>
            Discord
          </Link>
        </Box>
        <Spacer />
        <Box marginRight={2}  >
          < Button variant="solid" backgroundColor="#82AAE3" color="black"
            _hover={{
              background: "#82AAE3",
              color: "#black",
            }}
          >
           <Link as={RouterLink} to="/app/choice"> Go to the App</Link> </Button>

        </Box>
      </Center>
    </Flex>
  )
}

export default Navbar