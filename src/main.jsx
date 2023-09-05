import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Login from './Pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    children:[
      {
        path: "/",
    element:<Home></Home>
      },
      {
        path: "/details",
    element:<Details></Details>
      },
      {
        path: "/login",
    element:<Login></Login>
      },
      {
        path: '*',
        element: <Error/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>,
)
