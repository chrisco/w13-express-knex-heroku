
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('team').insert({name: 'Lucy Follansbee'}),
        knex('team').insert({name: 'Andy Knolla'}),
        knex('team').insert({name: 'Christopher Comella'}),
        knex('team').insert({name: 'Evan McClaugherty'}),
        knex('team').insert({name: 'Zach Zimmerman'})
      ]);
    });
};
