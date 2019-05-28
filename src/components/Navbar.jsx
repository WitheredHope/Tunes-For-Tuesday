import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {  }
    render() { 
        if(this.props.loggedin){
            return (
                <ul>
                    <li> <Link to="/voting/">Voting</Link> </li>
                    <li> <Link to="/adding/">Add Songs</Link> </li>
                </ul>
            )
        }else{
            return( 
                <div>
                    You aren't logged in
                </div> 
            )
        }
    }
}
 
export default Navbar;