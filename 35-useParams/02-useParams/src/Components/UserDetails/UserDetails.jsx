import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    

    const {name, username, email, website} = user

    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>{username}</p>
            <p>{user.address.city}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;