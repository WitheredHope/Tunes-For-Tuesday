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
                        <div key={array.uri}>
                            <img src={array.albumArt} alt="No Album Art" height="60" width="60"/> <br/>
                            {array.songName} <br/>
                            {array.artistName} <br/>
                            {array.albumName} <br/>
                        </div>
                    )
                })}
            </ul>
         );
    }
}
 
export default AddedSongs;