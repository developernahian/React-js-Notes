import useInputState from "../../Hooks/useInputState";


const HookForm = () => {

    const [name, handleNameChange] = useInputState('John hooked')

    const handleSubmit = e => {
        console.log('form data', name);
        
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
                <br />
                {/* <button>Submit</button> */}
            </form>
        </div>
    );
};

export default HookForm;