import React, {useState, Component} from "react";
import {
    Container,
    Form,
    FormControl,
    Button
  } from "react-bootstrap";

// Mock user database
const database = [{
    username: "user1",
    password: "pass1"
},{
    username: "user2",
    password: "pass2"
}];

  class LoginForm extends Component{

    constructor(props){
        super(props);

      this.state = {
          user: '',
          pass: ''
      };
    }

    onChangeUser(event) {
        this.setState({ user: event.target.value })
    }

    onChangePass(event) {
        this.setState({ pass: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Handling submit...");
        console.log(this.state.user);
        console.log(this.state.pass);
        const userData = database.find((uname) => uname.username === this.state.user);

        //Validation, only works as a mock at the moment. 
        if (userData) {
            if (userData.password !== this.state.pass) {
              // Invalid password
              console.log("Invalid Password.");
            } else {
              //Successfully log in 
              console.log("Log In Success");
            }
          } else {
            // Username not found
            console.log("User does not exist.");
        }
    }

    render() {
        return(
            <Container>
                <h1>Log In</h1>
                <Form className="login" onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group className="mb-3" controlId="uname">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.onChangeUser.bind(this)} type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onChangePass.bind(this)} type="text" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <br/>
            </Container>
        );
    }

  }

  export default LoginForm;

//PREVIOUS ATTEMPTS AT CODING THIS. YOU CAN LOOK AT IT IF YOU WANT.

/*const LoginForm = () => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmit = (event) => {
        console.log("Handling Submit...");
        //Prevent page reload
        event.preventDefault();

        //Take input, compare to (mock) database
        var { uname, pass } = document.forms["login"];
        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: "Invalid password." });
            } else {
              setIsSubmitted(true);
            }
          } else {
            // Username not found
            setErrorMessages({ name: "uname", message: "User does not exist." });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for sign up form
    const renderForm = (
        <Form className="login" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="uname">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
                {renderErrorMessage("uname")}
            </Form.Group>
            <Form.Group className="mb-3" controlId="pass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" />
                {renderErrorMessage("pass")}
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
        </Form>
    );

    return(
        <Container>
            <h1>Log In</h1>
            {isSubmitted ? <div>User Has successfully signed in.</div> : renderForm}
            <br></br>
        </Container>
    );
}

export default LoginForm;*/

/*<div className="form">
            <form name= "login" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <div className="button-container">
                    <button>Sign Up</button>
                </div>
            </form>
        </div>*/