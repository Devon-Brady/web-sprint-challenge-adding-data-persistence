// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports ={
    getResources,
    postResource
}

function getResources() {
    return db('resource');
}

function postResource(project){
    return db('resource')
    .insert(project)
    .then(([id])=>{
        return db("resource").where("resource_id", id).first();
    })
}