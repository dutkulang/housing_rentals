import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router";
import Error from './components/Error.jsx';
import Homepage from './components/Homepage';
import Property from './components/property.jsx';
import PropertyList from './components/PropertyList.jsx';
import Login from "./components/Login.jsx";
import Signup from './components/signup.jsx';
import './index.css'
import App from './App.jsx'
import Contact from './components/Contact.jsx';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Homepage /> ,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <PropertyList />
      },
      {
        path:"/property/123",
        element: <Property/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/contact",
        element: <Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
