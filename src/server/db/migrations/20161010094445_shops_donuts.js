'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops_donuts', (table) => {
    table.increments();
    table.integer('shop_id');
    table.foreign('shop_id').references('shops.id');
    table.integer('donut_id');
    table.foreign('donut_id').references('donuts.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops_donuts');
};
