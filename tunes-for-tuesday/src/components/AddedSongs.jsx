import React, { Component } from 'react';
class AddedSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        console.log("RENDERED")
        console.log(this.state.songs)
        console.log(this.props.songs)

        return ( 
            <ul>
                {console.log(this.props.songs.id)}
                {this.props.songs.map((array) =>{
                    return(
                        <li key={array.uri}>
                            {array.songName} 
                            {array.artistName} 
                            {array.albumName} 
                            <img src={array.albumArt} alt="No Album Art" height="42" width="42"/> 
                        </li>
                    )
                })}
            </ul>
         );
    }
}
 
export default AddedSongs;