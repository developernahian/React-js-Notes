
const SimpleForm = () => {


    // e is a parameter. e is shortform of event. je kono word use kora jai ekhane
    const handleSubmit = e => {
        e.preventDefault();//<---- avoid reload 

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
                {/* htmlFor and id with same value */}
                {/* Name e click korle input field e cursor asbe */}
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" placeholder="Enter your name" />
                <br />

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" />
                <br />

                <label htmlFor="phone">Phone:</label>
                <input id="phone" type="text" name="phone" placeholder="Enter Your Phone" />
                <br />

                <label htmlFor="password1">Password 1:</label>
                <input id="password1" type="password" name="password1" placeholder="Enter Password One" required/>
                <br />

                <label htmlFor="password2">Password 2:</label>
                <input id="password2" type="password" name="password2" placeholder="Enter Password Two" required/>
                <br />

                <input type="submit" value="Submit" />
                <br />
                {/* <button>Submit</button> */}
            </form>

        </div>
    );
};

export default SimpleForm;