'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('donuts', (table) => {
    table.increments();
    table.string('name');
    table.string('topping');
    table.integer('price').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donuts');
};
