import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';


// const routerrrrrrrr = 
const router = createBrowserRouter([

  // home page er jonno path name "/home" na diye only "/" dilei hobe. karon home page default page
  {
    path: "/",
    element: <Home></Home>,
  },
  
  
  
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <div>Contact Div</div>,
  },

  {
    path: "/login",
    element: <h1>Login h1</h1>,
  },

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <RouterProvider router={routerrrrrrrr} /> */}
  <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
