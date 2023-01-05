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
import { Provider } from 'react-redux'
import { store } from './configureStore'
import MainApp from './pages/MainApp';
import DoctorMarkVisit from './pages/Doctor/DoctorMarkVisit';
import DoctorOrPatient from './pages/Doctor/DoctorOrPatient';
import DoctorViewRecord from './pages/Doctor/DoctorViewRecord';
import PatientSide from './pages/PatientSide';
import PatientRecords from './pages/Patients/PatientRecords';
import Features from './components/homePage/Features';
import FaqSection from './components/homePage/FaqSection';
import HomePage from './components/homePage/HomePage';
import Doctor from './pages/Doctor'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  backgroundColors: {
    1: "#14354b"
  }
  ,
  cp: {
    1: "#82AAE3",
    2: "#91D8E4",
    3: "#BFEAF5",
    4: "#EAFDFC"
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
        path:"",
        element:<HomePage />,
      },
      {
        path:"FAQ",
        element:<FaqSection />
      },
      {
        path:"features",
      element:<Features />
      },
      {
        path:"*",
        element:<ErrorPage />
      }
    ]
  },
  {
    path: "/app",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "choice",
        element: <DoctorOrPatient/>
      },
      {
        path: "doctor",
        element: <Doctor />,
        children:[
          {
            path:"markvisit",
            element:<DoctorMarkVisit />
          },
          {
            path: "viewRecord",
            element: <DoctorViewRecord />
          },
        ]
      },
      
      {
        path: "patient",
        element: <PatientSide />,
        children: [
          {
            path: "records",
            element: <PatientRecords />
          }
        ]
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
