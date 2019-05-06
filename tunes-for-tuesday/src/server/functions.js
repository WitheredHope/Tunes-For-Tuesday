var fs = require("fs")

module.exports = {
    readfile: () => {
        let data = fs.readFile("votes.json","utf-8", (err,buf)=>{
            if(err){console.log(err)}
            console.log("test" + buf)
            return(buf)
        })
        return(data)
    },
    writefile: (data) => {
        fs.writeFile("votes.json", "utf-8", data, (err) => {
            if(err){console.log(err)}
        })
    }
}