import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h1>My Website</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }} >About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users" style={{ paddingLeft: '15px', paddingRight: '15px' }}>Users</Link>
                <Link to="/posts">Posts</Link>

                {/* <a href="/">Home</a>
                <a href="/about" style={{ paddingLeft: '15px', paddingRight: '15px' }}>About</a>
                <a href="/contact">Contact us</a> */}
            </nav>
        </div>
    );
};

export default Header;