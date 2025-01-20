import { useState } from "react";


const StatefulForm = () => {



    const [name, setName] = useState('John Doe')// initial value Jhon Doe
    const [email, setEmail] = useState(null)// initial value null
    const [password, setPassword] = useState(null)// initial value null
    const [error, setError] = useState('')


    const handleSubmit = e => {
        e.preventDefault();//<---- avoid for reload 

        // without password validation
        // console.log(name);
        // console.log(email);
        // console.log(password);

        // with password validation for must 6 character or longer
        if (password.length < 6) {
            setError('Password must be 6 character or longer')
        }
        else {
            setError('')
            console.log(name);
            console.log(email);
            console.log(password);
        }



    }

    const handleNameChange = e => {
        console.log(e.target.value);// Logs the typed value
        setName(e.target.value)// Updates the `name` state with the input's current value
    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)

    }

    return (
        <div>
            {/* form er data access korear jonno onSubmit event handler */}
            <form onSubmit={handleSubmit}>
                {/* value={name} -> eta dile borwser er input dield e state e dewa nam John Doe show korbe initial obostai */}
                {/* The value attribute in the <input> tag defines the current value displayed inside the input field. */}
                {/* name is a state variable that was defined earlier using the useState hook: */}
                {/* const [name, setName] = useState('John Doe'); */}
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                <br />
                
                {/* jodi error thake tahole error dekhabe na thakle dekhabe na */}
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;


