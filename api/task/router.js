// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Task = require("./model");

router.get("/",(req,res)=>{
   Task.getTask()
    .then((task)=>{
        res.status(200).json(task)
    })
})

router.post('/',(req,res)=>{
    const body = req.body
    Task.postTask(body)
    .then((task)=>{
        res.status(201).json(task)
    })
    .catch((err)=>{
        res.status(500).json({message:`Server Error:${err}`})
    })
})

module.exports=router;