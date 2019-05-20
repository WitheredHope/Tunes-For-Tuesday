import React, { Component } from 'react';
const spotifyapi = require('../spotifyapi')

class CurrentlyPlaying extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success:false, 
            item: {
                album: {
                    images: [{ url: "" }]
                },
                name: "",
                artists: [{ name: "" }],
                duration_ms:0,
            },
            is_playing: false,
            progress_ms: 0
        }
    }

    componentWillMount() {
        spotifyapi.getCurrentlyPlaying(this.props.token, (data) => {
            this.formatData(data)
        } )
    }

    formatData(data) {
        console.log("ran!")
        if(data != null){
            console.log("Success")
            this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms,
            })
        }else{
            console.log("Fail")
        }
    }
    
    render() {
        console.log(this.state)
        console.log(this.state.is_playing)
        console.log(!!this.state.is_playing)
        if (this.state.is_playing){
            return (
                <div className="App">
                    <div className="main-wrapper">
                        <div className="now-playing__img">
                            <img src={this.state.item.album.images[0].url} />
                        </div>
                    <div className="now-playing__side">
                        <div className="now-playing__name">
                            {this.state.item.name}
                        </div>
                        <div className="now-playing__artist">
                            {this.state.item.artists[0].name}
                        </div>
                        <div className="now-playing__status">
                            {this.state.is_playing ? "Playing" : "Paused"}
                        </div>
                        <div className="progress">
                            <div className="progress__bar"  />
                        </div>
                    </div>
                    <div className="background"  />{" "}
                    </div>
                </div>
                 );
        }
        console.log(!!this.success)        
        if(this.success){
            return (<h1>Nothing Playing?</h1>)
        }else{
            return(<h1>Nothing Works?</h1>)

        }
    }
}
 
export default CurrentlyPlaying;