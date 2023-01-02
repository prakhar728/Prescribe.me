import { Box, Button, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import VectorArt from "../../assets/LandingGraphic.svg"
import { Link as RouterLink } from "react-router-dom";
const MainLanding = () => {
    return (
        <Box width="100%" display={"flex"} alignItems="center" height="80vh" >
            <Box w="60%" display="flex" flexDirection={"column"}  height="80%"  >
                <Box height="40%" display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center">
                    <Text as="h1" fontSize="2xl" fontWeight={"bold"} color="#82AAE3" textAlign={"center"}>Prescribe.Me</Text>
                    <Text textAlign={"center"}>Save all your Prescriptions and Medical records on-chain!</Text>
                </Box>
                <Text paddingLeft="25%" paddingRight={"30%"}>The days where you had to worry about keeping all your medical records, mark your visits and keep all your prescriptions saved are over. We save them all for you, with an easy to use interface and connectivity we have your back!</Text>
                <Box display={"flex"} alignItems="flex-end" justifyContent={"flex-end"} paddingRight="5%">
                    <Button variant="solid" backgroundColor="#82AAE3" color="black"
                    _hover={{
                        background: "#82AAE3",
                        color: "#black",
                    }} > <Link as={RouterLink} to="/app/choices" fontWeight={"300"}> Less Gooo</Link> </Button></Box>
            </Box>
            <Box w="40%" height="80%" display={"flex"} justifyContent="Center" alignItems="center">
                <Image src={VectorArt} alt="LandingPage" />
            </Box>
        </Box>
    )
}

export default MainLanding