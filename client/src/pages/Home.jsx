import { Box } from '@chakra-ui/react'
import React from 'react'
import FaqSection from '../components/homePage/FaqSection'
import Features from '../components/homePage/Features'
import MainLanding from '../components/homePage/MainLanding'
import WhyUS from '../components/homePage/WhyUS'

const Home = () => {
  return (
    <Box>
      <MainLanding />
      <Features />
      <FaqSection />
      <WhyUS />
    </Box>
  )
}

export default Home