import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <div className="App">
      <Navbar />
      Simple React app
      <Outlet />
    </div>
  )
}

export default App
