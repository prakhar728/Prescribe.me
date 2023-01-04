import { Box, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import data from "../../assets/data.json";
import FeatureCard from './FeatureCard';
import SafeSVG from "../../assets/Safe.svg";

const Features = () => {
    const [featureData, setfeatureData] = useState([]);
    useEffect(() => {
        setfeatureData([
            {
                "src":SafeSVG,
                "title" :"Secure",
                "line":"All your Data is Saved on top of the Blockchain. The Most secure it can be!"
            },
            {
                "src":"/src/assets/Safe.svg",
                "title" :"Accessible",
                "line":"The data is accessible to you anywhere and to any organization you wish."
            },
            {
                "src":"/src/assets/Safe.svg",
                "title" :"Privacy",
                "line":"The data is shared with organisations that you trust."
            }
            
        ]);
    }, [])

    return (
        <Box height="80vh" >
            
                <Text color="#82AAE3" fontWeight="bold" as="h1" fontSize="5xl" paddingLeft="3%"
                    margin={4}>Features</Text>
                <Box display="flex" flexWrap="wrap" justifyContent={"space-evenly"} height="80%" alignItems={"Center"}>
                    {featureData.map((feature, key) => {
                        return (
                            <FeatureCard title={feature.title} line={feature.line} src={feature.src} uniqueKey={key} key={key} />
                        )
                    })}
                </Box>
        </Box>
    )
}

export default Features