

const SimpleForm = () => {


    // e is a parameter. e is shortform of event. je kono word use kora jai ekhane
    const handleSubmit = e => {
        e.preventDefault();//<---- avoid for reload 
        console.log("********************************************");
        
        console.log('form submitted');

        console.log(e);//SyntheticBaseEvent{_reactName: 'onSubmit', _targetInst: null, type: 'submit', nativeEvent: SubmitEvent, target: form,…}
        console.log(e.target);//<form></form>
        console.log(e.target.name);//<input type="text" name="name" />
        console.log(e.target.name.value);//John Doe

        console.log(e.target.email.value);//john@gmail.com
        console.log(e.target.phone.value);//0123456789
        console.log(e.target.password1.value);//123
        console.log(e.target.password2.value);//456
        

    }

    return (
        <div>


        
            {/* form er data access korear jonno onSubmit event handler */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="password" name="password1" />
                <br />
                <input type="password" name="password2" />
                <br />
                <input type="submit" value="Submit" />
                <br />
                {/* <button>Submit</button> */}
            </form>



            <br /><br /><br />
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />
                <br />
                <label htmlFor="email">Email:</label>
                
                <input type="email" id="email" placeholder="Enter your email" />
                <br />
                <label htmlFor="password">Password:</label>
                
                <input type="password" id="password" placeholder="Enter your password" />
                <br />
                <input type="submit" value="Submit" />

            </form>






        </div>
    );
};

export default SimpleForm;