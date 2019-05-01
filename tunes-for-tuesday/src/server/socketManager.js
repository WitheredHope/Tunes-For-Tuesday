const {SEND_VOTES} = require('../events')
module.exports = socket => {
    socket.on(SEND_VOTES, votes =>{
        console.log(votes)
    })
}