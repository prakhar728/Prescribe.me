import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Center,
    Heading,
} from '@chakra-ui/react';
import data from "../../assets/data.json";

const FaqSection = () => {
    const [faqSection, setFaqSection] = useState([])
    useEffect(() => {
        setFaqSection(data.Faq)
    }, [])

    return (
        <Box id="FAQ" height="88vh">
            <Heading as="h1" size="2xl" w="100%" textAlign={"Center"} mt={10}>
                Frequently Asked Questions
            </Heading>
            <Heading as="h2" size="md" w="100%" textAlign={"Center"} m={"8px"}>
                Feel free to ask. There are no Dumb questions!
            </Heading>
            <Flex  height="80%">
                <Center w="100%" height="100%"  >

                    <Box w="60%"  borderColor="blackAlpha.100" p={2}>
                        <Accordion allowToggle >

                            {faqSection && faqSection.map((faq, key) => {
                                return (
                                    <AccordionItem key={key} p={1} m={2}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left' fontWeight={"bold"} color="white" fontSize={"2xl"}>
                                                    {faq.title}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} color="#f0e9e9" fontWeight={400} fontSize="lg">
                                            {faq.Info}
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </Box>
                </Center>
            </Flex>
        </Box>
    )
}

export default FaqSection