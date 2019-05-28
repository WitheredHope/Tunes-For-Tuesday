import React, { Component } from 'react'
import './App.css';
import SpotifyLogin from './components/SpoifyLogin'
import Voting from './components/voting'
import Success from './components/Success'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Splash from './components/Splash';
import Adding from './components/Adding';
import Navbar from './components/Navbar';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = require('./configs/vars')


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
  firebase.initializeApp(firebaseConfig);
}

  logIn = (token) =>{
    this.setState({token:token, loggedin:true},
      () => {/*console.log(this.state)*/}
    )}

  render() {
    const {token, loggedin} = this.state
    return (
      <Router>
        <div>
          <header> 
            <h1>Tunes For Tuesday</h1>
            <Navbar loggedin={loggedin}/>
            <SpotifyLogin logIn={this.logIn}/>
          </header>
          <Route path="/" exact component={Splash}/>
          <Route path="/voting" render={()=><Voting token={token}/>}/>
          <Route path="/adding" render={()=><Adding token={token}/>}/>        
          <Route path="/callback" render={()=>(<Redirect to="/"/>)}/>
        </div>
      </Router>
    );
  }
}

export default App;
