import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
{
    path: "/",
    // element: <div>Hello world!</div>,
    element: <div>Hello world! default page</div>,
  },
  
  {
    path: "/about",
    element: <div>About page</div>,
  },

  {
    path: "/contact",
    element: <div>Contact page</div>,
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
