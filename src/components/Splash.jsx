import React, { Component } from 'react';
class Splash extends Component {
    state = {  }
    render() { 
        return (
            <div>
                It's an attempt at improving collaberative playlists! <br/>
                At the moment it's a work in progress but eventually it should have config options to:
                <ul>
                    <li>Limit the number of songs each person can add</li>
                    <li>Limit the max length of a song</li>
                    <li>Annonmise peoples songs</li>
                    <li>Have voting on peoples songs creating a rotating selection of songs</li>
                </ul>
            </div>
        );
    }
}
 
export default Splash;