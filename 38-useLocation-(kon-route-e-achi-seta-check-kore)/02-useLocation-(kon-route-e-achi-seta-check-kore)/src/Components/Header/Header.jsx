import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <h1>My Website</h1>
            <nav>


                {/* a tag use korle Reload hoy */}
                {/* 
                <a href="/">Home</a>
                <a href="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }}>About</a>
                <a href="/contact">Contact us</a>
                 */}




                {/* Link -> Used for navigation without refreshing the page.  */}
                {/* Does not provide any built-in styling for active links. */}
                {/* Ideal for general navigation where you don't need to highlight the current route. */}
                {/* Use **Link** for links where you don't need to indicate which route is active. */}
                {/* 
                <Link to="/">Home</Link>
                <Link to="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }} >About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users" style={{ paddingLeft: '15px', paddingRight: '15px' }}>Users</Link>
                <Link to="/posts">Posts</Link> 
                */}




                {/* NavLink e default akta active class diye dey. and oi active class active deactive hoy route er upor depend kore  */}
                {/* Purpose: Similar to Link, but designed specifically for navigation links that require active state management. */}
                {/* Automatically adds an active class (or applies custom styles) when the link matches the current route. */}
                {/* Allows you to style the active link differently from other links. */}
                {/* Supports className or style callbacks to dynamically style links based on their active state. */}
                {/* Useful for creating navigation menus where users need to see which page they're currently on. */}
                {/* Use **NavLink** for navigation menus or links where you want to style the active route differently. */}
                {/* acitve class browser console e check kora jai ekhane na dekha geleo */}
                <Link to="/">Home</Link>
                <NavLink to="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }} >About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/users" style={{ paddingLeft: '15px', paddingRight: '15px' }}>Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>


            </nav>
        </div>
    );
};

export default Header;





// Feature	                      Link                                   	NavLink
// .....................................................................................................
// Active State    	      No active state styling	         Adds active class or dynamic styles for active links
// Use Case	                Simple navigation	             Navigation with active state styling
// Styling Options  	      Manually styled	             Dynamic styling with style or className props