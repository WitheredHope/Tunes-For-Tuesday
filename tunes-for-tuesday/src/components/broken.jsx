import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    
    handleSubmit = event => {
        //runs every when the user hits return or presses the button
        // default function of a form submit is to reload the window
        event.preventDefault(); //this stops the issue mentioned above
        const { user,login } = this.props;
        if (!nickname) {
          this.setState({ error: "Nickname cannot be blank" });
        } else {
          socket.emit(VERIFY_USER, nickname);
          socket.on(USER_VERIFIED, bool => {
            if (bool) {
              this.props.login(nickname);
            } else {
              this.setState({ error: "Nickname taken" });
            }
          });
        }
      }



    render() {
        return ( 
        <form onSubmit={handleSubmit}>
        <input
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"Enter Name"} // this is what shows in the textbox
          />
        <input type ="submit" value="Submit"/>
        </form>
        );
    }

 
export default Login;