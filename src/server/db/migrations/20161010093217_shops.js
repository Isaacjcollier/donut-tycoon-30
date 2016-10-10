'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops', (table) => {
    table.increments();
    table.string('name');
    table.string('city');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops');
};
