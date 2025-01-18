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
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },

      {
        // userId get from url and url change get from <Link to={`/user/${id}`}>Show Details</Link> in User.jsx file
        //If the URL is /user/3, the userId will be 3.
        
        path: '/user/:userId',

        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        //For /user/3, the URL becomes https://jsonplaceholder.typicode.com/users/3.
        //params re {params} er maddhome distructure korechi. must use params keyword. but...
        // jodi params keyword chenge krte chai tahole je code likhte hobe seta niche diyechi
        // like use korte chaichi paramskk then code hobe.....
        ////// loader: ({ params: paramskk }) => fetch(`https://jsonplaceholder.typicode.com/users/${paramskk.userId}`),
        // Explain:::::::::::::::::::
        // * params is renamed to paramskk during destructuring.
        // ** You would then use paramskk.userId to access the userId value.
        // -> This approach works because you're explicitly renaming the params object during destructuring. It's purely a naming choice, but sticking with params is more conventional and improves readability, as most developers are familiar with the params keyword in react-router-dom. <-
        element: <UserDetails></UserDetails>
      },

      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },

      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
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
