(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const landingPageRoutes = require('../routes/landing_page.js');
    const shopsRoutes = require('../routes/shop.js');

    // *** register routes *** //
    app.use('/', landingPageRoutes);
    app.use('/donut-tycoon', shopsRoutes);

  };

})(module.exports);
