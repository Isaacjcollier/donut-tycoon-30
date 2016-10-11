const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  knex('employees')
  .then((results) => {
    console.log(results);
    res.render('employees.html', {results});
  });
});

module.exports = router;
