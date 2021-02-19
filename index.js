// start your server here
const server = require('./api/server')

server.listen(1234, ()=>{
    console.log(`\nServer is running on http://localhost:1234\n`)
})