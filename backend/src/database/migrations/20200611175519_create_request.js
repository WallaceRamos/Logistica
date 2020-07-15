
exports.up = function(knex) {
  return knex.schema.createTable('requests', function (table){
    table.increments();

    table.string('endereco').notNullable();
    table.string('produto').notNullable();
    table.string('quantidade').notNullable();
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('requests');
};
