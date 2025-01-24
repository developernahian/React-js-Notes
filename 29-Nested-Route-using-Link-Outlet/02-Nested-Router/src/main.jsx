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
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter([
  // home page er jonno path name "/home" na diye only "/" dilei hobe. karon home page default page
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/users',
        element: <Users></Users>
      }

    ]

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
