
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('employees').insert({
          first_name: 'Dallas',
          last_name: 'Stevenson',
          email: 'DallasExample@exam.com'
        }),

        knex('employees').insert({
          first_name: 'Bill',
          last_name: 'Poolman',
          email: 'billpoolman@exam.com'
        })
      ]);
    });
};
