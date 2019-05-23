import React, { Component } from 'react';
import Search from './Search';
import AddedSongs from './AddedSongs'
const spotifyapi = require('../spotifyapi')

class Adding extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addedSongs:[]
         }
    }

    addSong  = (song) => {
        console.log("RAN")
        this.setState(prevState => ({
            addedSongs: [...prevState.addedSongs, song ]
        }))
    }

    render() { 
        return (
            <div> 
                <h1>Adding Songs is not yet implemented</h1>
                <Search token={this.props.token} addSong={this.addSong}/>
                <AddedSongs songs={this.state.addedSongs}/>
            </div>
         );
    }
}
 
export default Adding;