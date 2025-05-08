import { useLoaderData } from "react-router-dom";
import User from "../User/user";


const Users = () => {

    const users = useLoaderData()

    console.log(users); //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    const userGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '10px',
    }
    



    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>our users information</p>
            <div style={userGrid}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;