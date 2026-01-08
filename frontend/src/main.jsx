import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router";
import Error from './components/Error.jsx';
import Homepage from './components/Homepage';
import Property from './components/property.jsx';
import PropertyList from './components/PropertyList.jsx';
import './index.css'
import App from './App.jsx'


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
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
