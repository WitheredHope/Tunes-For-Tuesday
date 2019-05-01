import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Voting from './components/voting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      loggedin: false
     }
}

  logIn = (user) =>{
    this.setState({user:user, loggedin:true},
      () => {console.log(this.state)}
    )}

  conditonalRedering = () =>{
    const {loggedin, user} = this.state
    if(!loggedin){
      return(
        <Login user={user} logIn={this.logIn}/>
      )
    }if(loggedin){
      return(
        <div>
          <h1>{"Logged in as: " + user}</h1>
          <Voting user={user}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <header> Tunes For Tuesday</header>
        {this.conditonalRedering()}
      </div>
    );
  }
}

export default App;
