import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            <Link to={`/user/${id}`}>Show Details</Link>
            {/* OR */}
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
            
        </div>
    );
};

export default User;