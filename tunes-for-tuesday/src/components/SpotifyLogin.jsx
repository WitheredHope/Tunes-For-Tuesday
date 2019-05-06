import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const vars = require('../vars')

class SpotifyLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to={ vars.urls.auth }>Login with Spotify</Link>
            </div>
         );
    }
}
 
export default SpotifyLogin;