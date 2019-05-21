import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <ul>
                <li> <Link to="/voting/">Voting</Link> </li>
                <li> <Link to="/adding/">Add Songs</Link> </li>
            </ul>
        );
    }
}
 
export default Navbar;