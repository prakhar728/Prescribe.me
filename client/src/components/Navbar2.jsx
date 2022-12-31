import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, Spacer } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import logo from "../assets/PrescribeLogo.png";
import { Image } from '@chakra-ui/react';
import { networks } from '../assets/networks';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddress, updateSigner } from '../features/WalletSlice';
import { ethers } from "ethers";
const Navbar = () => {
  const [accounts, setCurrentAccount] = useState("");
  const [Network, setNetwork] = useState("")

  const address = useSelector((state) => state.wallet.address);
  const dispatch = useDispatch()


  const connectWallet = async () => {
    if (!checkIfWalletIsConnected()) {
      try {
        const { ethereum } = window;

        if (!ethereum) {
          alert("Get MetaMask -> https://metamask.io/");
          return;
        }

        // Fancy method to request access to account.
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        // Boom! This should print out public address once we authorize Metamask.
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        dispatch(updateAddress(accounts[0]))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const checkIfWalletIsConnected = async () => {
    // First make sure we have access to window.ethereum
    const { ethereum } = window;


    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    // Check if we're authorized to access the user's wallet
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
      dispatch(updateAddress(account))

    } else {
      return console.log('No authorized account found');
    }
    // This is the new part, we check the user's network chain ID
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    if (chainId != "0x13881")
      await switchNetwork();
    setNetwork(networks[chainId]);

    ethereum.on('chainChanged', handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    dispatch(updateSigner(signer))
    return true;
  }

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x13881',
                  chainName: 'Polygon Mumbai Testnet',
                  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                  nativeCurrency: {
                    name: "Mumbai Matic",
                    symbol: "MATIC",
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                },
              ],
            });
            return;
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
    }
  }


  // useEffect(() => {
  //   console.log(address);
  // }, [address])


  return (
    <Flex>
      <Center w="100%" border="1px" height="20vh"  >
        <Box marginLeft={4}>
          <Image src={logo} alt="App Logo" height="20vh" />
        </Box>
        <Spacer />
        <Box w="40%" display="flex" alignItems="center" justifyContent="space-between" p={3} ml={2} >
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
        <Spacer />
        <Box marginRight={2}  >
          {!accounts && < Button variant="solid" onClick={connectWallet} backgroundColor="cp.1"
            _hover={{
              background: "cp.2",
              color: "black",
            }}
          >Connect To Wallet</Button>}
          {accounts && <Box border="1px" padding={2} borderRadius={10} borderColor="grey">  Wallet: {accounts.slice(0, 6)}...{accounts.slice(-4)} </Box>}

        </Box>
      </Center>
    </Flex>
  )
}

export default Navbar