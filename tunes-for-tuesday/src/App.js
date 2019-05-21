import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import SpotifyLogin from './components/SpoifyLogin'
import Voting from './components/voting'
import Success from './components/Success'
import io from "socket.io-client";
import {SEND_VOTES} from './events'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CurrentlyPlaying from './components/CurrentlyPlaying';
var Spotify = require('spotify-web-api-js');
var spot = new Spotify();
const {urls} = require('./configs/vars')
const socketUrl = "http://localhost:3231"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket:null,
      token:null, 
      name:null,
      loggedin: false,
      submitted:false,
      response:null      
     }
}

componentWillMount() {
  //this.initSocket();
}

getUser = (token) =>{
  spot.getMyTopArtists("", (error, response) =>{
    console.log(error)
    console.log(response)
  })
}

initSocket = () => {
  const socket = io(socketUrl);
  socket.on("connect", () => {
    console.log("Connected");
  });
  this.setState({ socket });
};

  logIn = (token) =>{
    this.setState({token:token, loggedin:true},
      () => {console.log(this.state)}
    )}

  submit = (data) =>{
    const {socket} = this.state
    this.setState({submitted:true})
    console.log(data)
    socket.emit(SEND_VOTES, data)
  }

  homeRedering = () =>{
    const {loggedin, submitted, token} = this.state
    if(!loggedin){
      return(
        //<Login user={user} logIn={this.logIn}/>
        <SpotifyLogin logIn={this.logIn}/>
      )
    }if(loggedin & !submitted){
      return(
        <div>
          <h1>{"Logged in"}</h1>
          <Voting token={token} submit={this.submit}/>
          {/*<CurrentlyPlaying token={token}/>*/}
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
        <Route path="/callback" component={Success}/>
        <div>
          <header> Tunes For Tuesday</header>
          {this.homeRedering()}
        </div>
        </Router>
    );
  }
}

export default App;
