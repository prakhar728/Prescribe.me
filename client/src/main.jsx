import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from './pages/Home'
import { Provider } from 'react-redux'  
import {store} from './configureStore'
import MainApp from './pages/MainApp';
import Doctors from './pages/Doctors'
import DoctorMarkVisit from './pages/DoctorMarkVisit';
import DoctorOrPatient from './pages/DoctorOrPatient'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  backgroundColors:{
    1:"#14354b" 
  }
  ,
  cp:{
    1:"#82AAE3",
    2:"#91D8E4",
    3:"#BFEAF5",
    4:"#EAFDFC"
  }
}

const theme = extendTheme({ colors })

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"home",
        element:<Home />
      },
    ],
  },
  {
    path:"/app",
    element:<DoctorOrPatient />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"choice",
        element:<MainApp />
      },
      {
        path:"doctor",
        // element:<Doctors />
        element:<DoctorMarkVisit />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
