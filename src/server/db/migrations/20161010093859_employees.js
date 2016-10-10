'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.integer('favorite_donut');
    table.foreign('favorite_donut').references('donuts.id');
    table.integer('shop_id');
    table.foreign('shop_id').references('shops.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
