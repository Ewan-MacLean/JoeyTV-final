import React, {Component, useState} from "react";
import {
    Container,
    Form,
    FormControl,
    Button
  } from "react-bootstrap";

// Mock user database
const database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
    ];

class SignupForm extends Component{

    constructor(props){
        super(props);

      this.state = {
          user: '',
          pass1: '',
          pass2: ''
      };
    }

    onChangeUser(event) {
        this.setState({ user: event.target.value })
    }

    onChangePass1(event) {
        this.setState({ pass1: event.target.value })
    }

    onChangePass2(event) {
        this.setState({ pass2: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Handling submit...");
        console.log(this.state.user);
        console.log(this.state.pass1);
        console.log(this.state.pass2);
        const userData = database.find((uname) => uname.username === this.state.user);

        //Validation, only works as a mock at the moment. 
        if (userData) {
            console.log("User already exists.")
        } 
        else if (this.state.pass1 !== this.state.pass2){
            console.log('Password does not match.')
        }
        else {
            //Some code here to add user to database...
        }
    }

    render() {
        return(
            <Container>
                <h1>Sign Up</h1>
                <Form className="login" onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group className="mb-3" controlId="uname">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.onChangeUser.bind(this)} type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onChangePass1.bind(this)} type="text" placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Control onChange={this.onChangePass2.bind(this)} type="text" placeholder="Re-type Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <br/>
            </Container>
        );
    }

}

    
export default SignupForm;

/*Old code:

const SignupForm = () => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        //Take input, compare to (mock) database
        var {uname, pass1, pass2 } = document.forms["signup"];
        const userData = database.find((user) => user.username === uname.value);

        
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for sign up form
    const renderForm = (
        <div className="form">
            <form name="signup" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass1" required />
                </div>
                <div className="input-container">
                    <label>Repeat Password </label>
                    <input type="password" name="pass2" required />
                    {renderErrorMessage("pass2")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <div className="button-container">
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );

    return(
        <div className="signup-form">
            <div className="title">Sign Up</div>
            {isSubmitted ? <div>User Has successfully signed up</div> : renderForm}
        </div>
    );
}

*/

/* Cut Email functionality code:

//else if (){
        //check email validity too tired to code rn
        //setErrorMessages({ name: "email", message: "Invalid email address." });
        //} 

                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" required />
                    {renderErrorMessage("uname")}
                </div>

*/