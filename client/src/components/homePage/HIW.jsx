import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import img1 from "../../assets/Blockchain.jpg"
import HIWCARD from './HIWCARDL'
import HIWCARDR from './HIWCARDR'
import web3 from "../../assets/Web3.svg"
const HIW = () => {
  const data = [
    {
      img:web3,
      title:"The Power of Web3 at your Fingertips",
      info:"We bring the newest web3 technology at your fingertips to save all your medical records and prescriptions saved on-chain!."
    },
    {
      img:img1,
      title:"You don't have to do a thing! ",
      info:"The Visits are marked by the respective organizations that patients visit, they will also add any comments or diagnoses that were made during the visit."
    },
    {
      img:img1,
      title:"They can't be tampered with",
      info:"The data is saved on the blockchain! It can't be tampered with at any cost, using a unique code provided to you, the visits and prescriptions can be verified anytime."
    },
    {
      img:img1,
      title:"Medical insurance",
      info:"Cut out the middleman and receive prompt, validated health information directly from patients allowing you to access their accurate and up-to-date records in a more cost and time-effective manner."
    }
  ]
  return (
    <Box minHeight="100vh" padding="24px">
      <Heading as="h1" size="2xl" fontWeight='extrabold' textAlign={"Center"}>HOW IT WORKS?</Heading>
      <Box display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="space-evenly"  >
        {data.map((temp,key)=>{
          if(key%2==0){
            return(
              <HIWCARDR key={key} img={temp.img} title={temp.title} info={temp.info} />
            )
          }
          return(
            <HIWCARD key={key} img={temp.img} title={temp.title} info={temp.info} />
          )
        })}
      </Box>
    </Box>
  )
} 

export default HIW