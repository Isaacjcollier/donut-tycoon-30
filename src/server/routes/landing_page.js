const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  res.redirect('/donut-tycoon');
});

router.get('/donut-tycoon', (req, res, next) => {
  res.render('landing_page.html');
});

module.exports = router;
