import { useState } from "react";
// import Link from "../Link/Link";
import { MdMenu, } from "react-icons/md";
import { MdClose } from "react-icons/md";


const NavBar = () => {
    const [open, setOpen] = useState(false);

    //start chatgpt
    // ChatGPT Prompt
    // give me 5 routes data for a react app in an array of js
    // dont give me component. Give me path, name, id
    // please write each object in one line
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "User Profile" },
    ];
    // end chatgpt


    return (
        <nav className="p-6 text-black bg-yellow-200">

            <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdClose /> : <MdMenu />
                }
            </div>


            {/* menu top theke niche asbe emon animation korte na chaile just hidden use kora jai . hidden er code niche comment e */}
            {/* <ul className={`md:flex px-4 bg-yellow-200 shadow-xl duration-1000 absolute ${open ? '' : 'hidden'}`}> */}

            <ul className={`md:flex px-4 bg-yellow-200 shadow-xl md:shadow-none duration-700 absolute md:static ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <li className="mr-10 hover:bg-yellow-500 px-6" key={route.id}><a href={route.path}>{route.name}</a></li>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;



// output like this
// <ul>
//     <li><a></a></li>
//     <li><a></a></li>
//     <li><a></a></li>
//     <li><a></a></li>
//     <li><a></a></li>
// </ul> 
