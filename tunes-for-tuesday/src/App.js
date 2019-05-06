import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Voting from './components/voting';
import io from "socket.io-client";
import {SEND_VOTES} from './events'
import SpotifyLogin from './components/SpotifyLogin';
import { BrowserRouter as Router, Route } from "react-router-dom";


const socketUrl = "http://localhost:3231"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket:null,
      user:null,
      loggedin: false,
      submitted:false      
     }
}


componentWillMount() {
  this.initSocket();
}

initSocket = () => {
  const socket = io(socketUrl);
  socket.on("connect", () => {
    console.log("Connected");
  });
  this.setState({ socket });
};

  logIn = (user) =>{
    this.setState({user:user, loggedin:true},
      () => {console.log(this.state)}
    )}

  submit = (data) =>{
    const {socket} = this.state
    this.setState({submitted:true})
    console.log(data)
    socket.emit(SEND_VOTES, data)
  }

  homeRedering = () =>{
    const {loggedin, submitted, user} = this.state
    if(!loggedin){
      return(
        //<Login user={user} logIn={this.logIn}/>
        <SpotifyLogin/>
      )
    }if(loggedin & !submitted){
      return(
        <div>
          <h1>{"Logged in as: " + user}</h1>
          <Voting user={user} submit={this.submit}/>
        </div>
      )
    }else{
      return(
        <h1>Big Happy</h1>
      )
    }
  }

  render() {
    return (
      <Router>
      <div>
        <header> Tunes For Tuesday</header>
        {this.homeRedering()}
      </div>
      </Router>
    );
  }
}

export default App;
