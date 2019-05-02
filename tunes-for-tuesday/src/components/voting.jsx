import React, { Component } from 'react';
class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request:{},
            user:null,
            votes:[]
        }
    }

    componentWillMount () {
        const myRequest= require("../request2")
        this.setState({request:myRequest,user:this.props.user}, () => {
            console.log(this.state)
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
            user:user,
            votes:votes
        }
        this.props.submit(data)
    }

    render() {
        const members=this.state.request.items.map(array=>{return(array.added_by.id)})
        console.log(members)
        if(members.indexOf(this.state.user) > -1){ 
        return (
            <div>
                {this.state.request.items.map((array) =>{
                    if(array.added_by.id!==this.state.user){
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