import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {

  return (
    <Box className="App"  color="White" backgroundColor="backgroundColors.1">
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default App
