

// children : eta react er... children mane children. onno keyword use kora jabe na
const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {
    // The key point: Default value only works if nothing is passed-> submitBtnText = 'Submit'
    // "If nothing is passed for submitBtnText, use 'Submit' by default."


    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
            
        }
        handleSubmit(data)
    }

    return (
        <div>
        <h2>{formTitle}</h2>
        {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                {/* <input type="submit" value="Submit" /> */}
                <input type="submit" value={submitBtnText} />
                <br />
                
            </form>
        </div>
    );
};

export default ReusableForm;