import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/homePage/Navbar'
import Home from './pages/Home'


function App() {

  return (
    <Box className="App"  color="White" backgroundColor="backgroundColors.1" >
      <Navbar />
      <Home />
   </Box>
  )
}

export default App
