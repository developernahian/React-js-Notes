import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <h1>My Website</h1>
            <nav>
                

                {/* 
                <a href="/">Home</a>
                <a href="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }}>About</a>
                <a href="/contact">Contact us</a>
                 */}

                {/* 
                <Link to="/">Home</Link>
                <Link to="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }} >About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users" style={{ paddingLeft: '15px', paddingRight: '15px' }}>Users</Link>
                <Link to="/posts">Posts</Link> 
                */}

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