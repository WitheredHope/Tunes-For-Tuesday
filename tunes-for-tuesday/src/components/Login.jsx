import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInput:""
         }
    }

    handleChange = event => {
        this.setState({ userInput: event.target.value }, () => {});
        //the second => funtion makes it update immediatly
      };

    handleSubmit = event =>{
        const {userInput} = this.state
        event.preventDefault()
        this.props.logIn(userInput)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        //ref={ input => { this.textInput = input } }
                        type="text"
                        id="login"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                        placeholder={"Enter Name"} // this is what shows in the textbox
                    />
                    <input 
                        type ="submit" value="Submit"
                    />
                </form>
            </div>
        );
    }
}
 
export default Login;