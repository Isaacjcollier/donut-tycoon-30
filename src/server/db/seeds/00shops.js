
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shops').insert({
          name: 'Krispy Kreme',
          city: 'Littleton'
        }),

        knex('shops').insert({
          name: 'All About the Glaze',
          city: 'Chicago'
        })
      ]);
    });
};
