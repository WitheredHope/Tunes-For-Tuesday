import React, { Component } from 'react';
const spotifyapi = require('../spotifyapi')


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:"",
            data:[],
            addedSongs:[]
        }
    }

    handleChange = (events) => {
        let query = events.target.value
        this.setState({search:query})
        spotifyapi.search(this.props.token, query, (data) => {
            const myData = data.tracks.items.map(
                array => {
                    return(
                        {
                            songName:array.name,
                            artistName:array.artists[0].name,
                            albumName:array.album.name,
                            albumArt:array.album.images[0].url,
                            uri:array.uri
                        }
                    )
                }
            )
            this.setState({data:myData})
            })
    }

    handleClick  = (event) => {
        const index = event.target.id
        console.log(this.state.data[index])
        this.props.addSong(this.state.data[index])
        this.setState({
            search:"",
            data:[],
        }, () => {
            console.log(this.state.addedSongs
            )})
        
    }

    render() {
        const {search} = this.state
        if(this.props.token){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        type="input" 
                        onChange={this.handleChange}
                        placeholder="Search for a song, it just might work!"
                        value={search}
                        />
                    </form>
                    <div>
                        {this.state.data.map((array, index) => {
                            return(
                                <button id={index} key={index} onClick={this.handleClick}>
                                    {array.songName}<br/>
                                    {array.artistName}<br/>
                                    {array.albumName}
                               </button>
                            )
                        })}
                    </div>
                    {/*<ul>
                        {this.state.results.map(function(item, index){
                        return(
                            <button key={index}>
                                {item}
                                <input type="radio" name = "answers" value={item}  />
                                <br />
                            </button>
                            )})
                
                        }
                    </ul>*/}
                </div> 
            )
        }else{
            return( null )
        }
    }
}
 
export default Search;