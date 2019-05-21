import React, { Component } from 'react';
import "./voting.css"
const spotifyapi = require('../spotifyapi')


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
                                <input type="radio" name={array.track.id} value={1} class="one"/>
                                <input type="radio" name={array.track.id} value={2} class="two"/>
                                <input type="radio" name={array.track.id} value={3} class="three"/>
                                <input type="radio" name={array.track.id} value={4} class="four"/>
                                <input type="radio" name={array.track.id} value={5} class="five"/>    
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
                 <p>Something went wrong</p>
             )
         };
    }
}
 
export default Voting;

/*
json with songs + score
json with each person + songscore?
*/