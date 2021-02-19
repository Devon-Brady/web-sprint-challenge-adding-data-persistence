// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resources = require("./model");

router.get("/",(req,res)=>{
    Resources.getResources()
    .then((resources)=>{
        res.status(200).json(resources)
    })
})

router.post('/',(req,res)=>{
    const body = req.body
    Resources.postResource(body)
    .then((resource)=>{
        res.status(201).json(resource)
    })
    .catch((err)=>{
        res.status(500).json({message:`Server Error:${err}`})
    })
})

module.exports = router;