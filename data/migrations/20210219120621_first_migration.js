exports.up = function (knex) {
  return knex.schema
  .createTable("projects", (table) => {
    table.increments("project_id");
    table.text("project_name", 128).unique().notNullable();
    table.text("project_description", 128).defaultTo("No Description");
    table.boolean("project_completed").defaultTo("false");
  })
  .createTable("resource", (table)=>{
    table.increments("resource_id");
     table.text("resource_name",128).notNullable().unique()
     table.text("resource_description",128).defaultTo("No Description");
  })
  .createTable("tasks", (table)=>{
      table.increments("task_id");
      table.text("task_description",123).notNullable();
      table.text("task_notes",128).defaultTo("No Notes")
      table.boolean("task_completed").defaultTo("false")
      table.integer("project_id").unsigned().references("project_id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE");

  })
};

exports.down = function (knex) {};
