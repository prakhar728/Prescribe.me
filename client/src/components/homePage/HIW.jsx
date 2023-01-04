import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import img1 from "../../assets/Blockchain.jpg"
import HIWCARD from './HIWCARD'
const HIW = () => {
  const data = [
    {
      img:img1,
      title:"The Power of Web3 at your Fingertips",
      info:"We bring the newest web3 technology at your fingertips to save all your medical records and prescriptions saved on-chain!."
    },
    {
      img:img1,
      title:"title1",
      info:"Info"
    },
    {
      img:img1,
      title:"title1",
      info:"Info"
    },
    {
      img:img1,
      title:"title1",
      info:"Info"
    }
  ]
  return (
    <Box minHeight="100vh">
      <Heading as="h1" size="2xl" fontWeight='extrabold' textAlign={"Center"}>HOW IT WORKS?</Heading>
      <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="space-evenly"  >
        {data.map((temp,key)=>{
          return(
            <HIWCARD key={key} img={temp.img} title={temp.title} info={temp.info} />
          )
        })}
      </Box>
    </Box>
  )
} 

export default HIW