// build your server here and require it from index.js
const express = require("express");
const server = express();
const projectRouter = require('../api/project/router');
const resorceRouter = require('../api/resource/router');
const taskRouter = require("../api/task/router");

server.use(express.json());
server.use("/api/projects", projectRouter)
server.use("/api/resources", resorceRouter)
server.use("/api/task", taskRouter)

server.get('/',(req,res)=>{
    res.send(`<h2>Welcome to the api!</h2>`)
});

module.exports = server;