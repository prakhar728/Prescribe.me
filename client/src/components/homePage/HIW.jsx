import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import img1 from "../../assets/web3Image.svg"
import HIWCARD from './HIWCARDL'
import HIWCARDR from './HIWCARDR'
import accessbility from "../../assets/accessibility.svg";
import insurance from "../../assets/insurance.svg"
import security from "../../assets/Security.svg";
const HIW = () => {
  const data = [
    {
      img:img1,
      title:"The Power of Web3 at your Fingertips",
      info:"We bring the newest web3 technology at your fingertips to save all your medical records and prescriptions saved on-chain!."
    },
    {
      img:img1,
      title:"You don't have to do a thing! ",
      info:"The Visits are marked by the respective organizations that patients visit, they will also add any comments or diagnoses that were made during the visit."
    },
    {
      img:accessbility,
      title:"They can't be tampered with",
      info:"The data is saved on the blockchain! It can't be tampered with at any cost, using a unique code provided to you, the visits and prescriptions can be verified anytime."
    },
    {
      img:insurance,
      title:"Medical insurance",
      info:"Cut out the middleman and receive prompt, validated health information directly from patients allowing you to access their accurate and up-to-date records in a more cost and time-effective manner."
    },
    {
      img:security,
      title:"Don't worry if you couldn't remember your last visit or your medical history",
      info:"All the Info is saved the blockchain, i.e, forever. Thus all your info will be available forever and the doctor you visit can view the info and read your medical history accordingly"
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