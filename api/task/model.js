// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports ={
    getTask,
    postTask
}

function getTask() {
    return db('tasks')
}

function postTask(body){
    return db("tasks")
    .insert(body)
    .then(([id])=>{
        return db("tasks").where("task_id",id).first();
    })
}
