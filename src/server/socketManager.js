const {SEND_VOTES} = require('../events')
const functions = require('./functions')
let data=[]


module.exports = socket => {
    socket.on(SEND_VOTES, votes =>{
        //console.log(data)
        data = data.filter((item) => item.user !== votes.user)
        data.push(votes)
        console.log(data)
    })
}