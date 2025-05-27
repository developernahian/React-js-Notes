import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Coffees from "../pages/Coffees"
import CoffeeCards from "../components/CoffeeCards"
import CoffeeDetails from "../pages/CoffeeDetails"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    // errorElement: <p>Error</p>,
    children: [
      // [=] 1 Default Home
      {
        // index: true,
        path: '/',
        element: <Home></Home>,
        //IMPORTANT: nested component banale fetch er time e ../ diye hobe// ../ mane ak route back e jabe //B10 milestone8 Conceptual video 6 er 33:22 minute e explain // json file jodi public folder e na theke github e rekeh link fetch kora hoy tahole ../ dewa lagbe na.
        loader: () => fetch('../categories.json'),
        children: [
          // [+] a....
          {
            // path: '/category/:nahian', //in coffeeCards.jsx file--> const obj = useParams() //and console.log(obj); -> output: {nahian: 'Dessert Coffee'}
            // // if with distructure const {obj} = useParams() // and console.log(obj); -> output : Dessert Coffee
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            // If the user visits /category/Black Coffee, the value of category will be "Black Coffee".
            loader: () => fetch('../coffees.json'),
          },

          // [+] b....
          {
            // path: '/category/:nahian', //in coffeeCards.jsx file--> const obj = useParams() //and console.log(obj); -> output: {nahian: 'Dessert Coffee'}
            // // if with distructure const {obj} = useParams() // and console.log(obj); -> output : Dessert Coffee
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            // If the user visits /category/Black Coffee, the value of category will be "Black Coffee".
            loader: () => fetch('../coffees.json'),
          },
        ],
      },

      // [=] 2 Coffees
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader: () => fetch('../coffees.json'),
      },

      // [=] 3 Dashboard
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },

      // [=] 4 Coffee Details...................
      {
        path: '/coffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch('../coffees.json'),
      }

    ],
  }
])

// export { routes }
export default routes