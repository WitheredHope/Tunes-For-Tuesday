import React, { Component } from 'react';

const spotifyapi = require('../spotifyapi')
let myRequest = {}


class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request:{
                items:[]
            },
            user:{id:null},
            votes:[]
        }
    }

    componentDidMount () {
        const playlistID = "2BWj9AqpRSQQkjg0E5ZVyx"
        spotifyapi.getPlaylistTracks(this.props.token, playlistID, (data) =>{
            this.setState ({request: data}, () => {
            })
        })
        spotifyapi.getUser(this.props.token, (data) => {
            this.setState({user: data}, () =>{
                console.log(this.state)
            })
        })
    }

    handleChange = event =>{
        const songid = event.target.name
        const score = event.target.value
        const votes = this.state.votes.filter((item) => item.songid !== songid)
        votes.push({songid:songid, score:score})
        this.setState({ votes:votes})
        }

    handleSubmit = event =>{
        event.preventDefault()
        const {votes, user} = this.state
        const data = {
            user:user.id,
            votes:votes
        }
        this.props.submit(data)
    }

    render() {
        const members=this.state.request.items.map(array=>{return(array.added_by.id)})
        console.log(members)
        if(members.indexOf(this.state.user.id) > -1){ 
        return (
            <div>
                {this.state.request.items.map((array) =>{
                    if(array.added_by.id!==this.state.user.id){
                        return(
                        <form className="songVoting" key={array.track.id} >
                            <h4>{array.track.name}</h4>
                            <div onChange={this.handleChange}>
                                <input type="radio" name={array.track.id} value={1}/>
                                <input type="radio" name={array.track.id} value={2}/>
                                <input type="radio" name={array.track.id} value={3}/>
                                <input type="radio" name={array.track.id} value={4}/>
                                <input type="radio" name={array.track.id} value={5}/>    
                            </div>
                        </form>
                    )}else{return(null)}
                })}
                <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit :)</button>
            </div>

            /*
            <div>
          <ul>
            {this.state.answers.map(function(item, index){
              return(
              <div key={index}>
              {item}
                <input type="radio" name = "answers" value={item}  />
                 <br />
              </div>)})
              
            }
          </ul>
        </div>
            */
         )}else{
             return(
                 <p>Either; I fucked up, you fucked up, or you haven't added a song to the playlist</p>
             )
         };
    }
}
 
export default Voting;

/*
json with songs + score
json with each person + songscore?
*/