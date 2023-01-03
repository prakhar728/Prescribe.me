import { Box } from '@chakra-ui/react'
import React from 'react'
import Features from './Features'
import HIW from './HIW'
import MainLanding from './MainLanding'

const HomePage = () => {
    return (
        <Box>
            <MainLanding />
            <Features />
            <HIW />
        </Box>
    )
}

export default HomePage