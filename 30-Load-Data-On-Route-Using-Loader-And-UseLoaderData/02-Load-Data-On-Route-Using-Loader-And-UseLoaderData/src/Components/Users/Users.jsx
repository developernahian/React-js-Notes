import { useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData()

    console.log(users);
    

    // state
    // state --> loader
    // use effect
    // fetch --> state set --> set state

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Our Users: {users.length}</p>
            <p>our users information</p>
        </div>
    );
};

export default Users;