
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return knex('shops').select('id').then((results) => {
        console.log(results);
        return Promise.all([
          // Inserts seed entries
          knex('employees').insert({
            first_name: 'Dallas',
            last_name: 'Stevenson',
            email: 'DallasExample@exam.com',
            shop_id: results[Math.floor(Math.random() * results.length)].id
          }),

          knex('employees').insert({
            first_name: 'Bill',
            last_name: 'Poolman',
            email: 'billpoolman@exam.com',
            shop_id: results[Math.floor(Math.random() * results.length)].id
          })
        ]);
      })
    });
};
