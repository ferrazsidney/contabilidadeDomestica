
exports.up = function(knex) {
  return knex.schema.createTable('gastos', function (table) {
    table.increments();
    table.string('descricao').notNullable();
    table.decimal('valor').notNullable();
    table.integer('parcelas').notNullable();
    table.date('data').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('gastos');
};
