import React, { Component } from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import hash from "../hash";

class SpotifyLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            token:null
         }
    }

    componentDidMount() {
        let token=hash.access_token
        if (token){
            this.setState({token:token})
            this.props.logIn(token)
            console.log(token)
        }
    }

    render() { 
        return ( 
            <div>
                <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
            
            </div>
         );
    }
}
 
export default SpotifyLogin;