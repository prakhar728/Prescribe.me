import { Box } from '@chakra-ui/react'
import React from 'react'
import FaqSection from '../components/FaqSection'
import Features from '../components/Features'
import MainLanding from '../components/MainLanding'
import WhyUS from '../components/WhyUS'

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