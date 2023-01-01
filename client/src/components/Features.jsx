import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import data from "../assets/data.json";
import FeatureCard from './FeatureCard';
import image from "../assets/Safe.svg";
const Features = () => {
    const [featureData, setfeatureData] = useState([]);
    useEffect(() => {
      setfeatureData(data.Featues);
      console.log(image);
    }, [])
    
    return (
        <Box minHeight="80vh">
            <Text color="#82AAE3" fontWeight="bold" as="h1" fontSize="3xl" paddingLeft="3%" 
            margin={4}>Features</Text>
            <Box display="flex" flexWrap="wrap" justifyContent={"space-evenly"} gap="10%"  >
            {featureData.map((feature,key)=>{
                return(
                    <FeatureCard title={feature.title} line={feature.line} src={feature.src} uniqueKey={key} key={key}/>
                )
            })}
            </Box>
       
        </Box>
    )
}

export default Features