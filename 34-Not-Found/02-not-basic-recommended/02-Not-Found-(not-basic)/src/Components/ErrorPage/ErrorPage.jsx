import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    console.log(error);
    
    return (
        <div>
            <h2>Oops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;


// browser console error........
// ErrorResponseImpl
// data: "Error: No route matches URL \"/contact/c\""
// error: Error: No route matches URL "/contact/c" at getInternalRouterError (http:***** )
//       {
//         message: "No route matches URL *******.... "
//         stack: "Error: No route matches URL ******... "
//       }
// internal: true
// status: 404
// statusText: "Not Found"
// [[Prototype]]: Object