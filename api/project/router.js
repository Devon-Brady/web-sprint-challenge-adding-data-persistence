// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require("./model");

router.get("/",(req,res)=>{
    Projects.getProjects()
    .then((project)=>{
        res.status(200).json(project)
    })
})

router.post("/",(req,res)=>{
    const body = req.body
    Projects.postProject(body)
    .then((project)=>{
        res.status(201).json(project)
    })
    .catch((err)=>{
        res.status(500).json({message:`Server Error:${err}`})
    })
})
module.exports = router;