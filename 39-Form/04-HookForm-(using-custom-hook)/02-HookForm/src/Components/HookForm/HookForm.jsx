import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    const nameState = useInputState('John')
    const emailState = useInputState('joho@')
    const passwordState = useInputState('12')

    const handleSubmit = e => {
        console.log('form data for name: ', nameState.value)
        console.log('form data for email: ', emailState.value)
        console.log('form data for password: ', passwordState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input {...passwordState} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;