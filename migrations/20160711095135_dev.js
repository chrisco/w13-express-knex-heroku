
exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', function (table) {
    table.increments();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('team');
};
