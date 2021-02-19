// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports ={
    getProjects,
    postProject
}

function getProjects() {
    return db('projects');
}

function postProject(project){
    return db('projects')
    .insert(project)
    .then(([id])=>{
        return db("projects").where("project_id", id).first();
    })
}