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

const { Client } = require('pg')
const client = new Client()

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})


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
