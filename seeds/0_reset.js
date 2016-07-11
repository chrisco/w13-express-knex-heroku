
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE team RESTART IDENTITY CASCADE');
  };
