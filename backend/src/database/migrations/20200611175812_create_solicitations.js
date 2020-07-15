
exports.up = function(knex) {
  return knex.schema.createTable('solicitations', function (table){
    table.increments();

    table.string('endereco').notNullable();
    table.string('produto').notNullable();
    table.string('quantidade').notNullable();
    table.string('order_id').notNullable();

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('solicitations');
};