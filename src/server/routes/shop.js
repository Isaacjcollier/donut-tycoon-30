const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/shops', (req, res, next) => {
  var shopListObj = {};
  knex('shops')
  .then((results) => {
    shopListObj = results;
    res.render('shops.html', {shopListObj});
  });
});

router.get('/shops/new', (req, res, next) => {
  res.render('shops_new.html');
});

router.post('/shops/new', (req, res, next) => {
  console.log(req.body);
  if (req.body.name === '' || req.body.city === '') {
    res.status(404).send({
      status: 'error',
      message: 'please fill out the form before submitting'
    });
  } else {
    knex('shops')
    .insert({
      name: req.body.name,
      city: req.body.city
    })
    .then((results) => {
      res.redirect('/donut-tycoon/shops');
    });
  }
});

router.get('/shops/:id', (req, res, next) => {
  var shopId = req.params;
  var singleShopObj = {};
  knex('shops')
  .where(shopId, 'id')
  .then((results) => {
    singleShopObj = results[0];
    res.render('shops_single.html', singleShopObj);
  });
});

router.get('/shops/:id/edit', (req, res, next) => {
  var oldShopId = req.params;
  var oldSingleShopObj = {};
  knex('shops')
  .where(oldShopId, 'id')
  .then((results) => {
    oldSingleShopObj = results[0];
    res.render('shops_edit.html', oldSingleShopObj);
  });
});

router.post('/shops/:id/edit', (req, res, next) => {
  var updateShopId = req.params.id;
  var updateShopName = req.body.name;
  var updateShopCity = req.body.city;
  knex('shops')
  .where('id', updateShopId)
  .update({
    name: req.body.name,
    city: req.body.city
  })
  .then((results) => {
    console.log(results);
    res.redirect('/donut-tycoon/shops');
  });
});

module.exports = router;
