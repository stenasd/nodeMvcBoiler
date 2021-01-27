
//what connects all small parts and used for testing and give out express app to routes and middelware
const express = require('express');
const dbstart = require('../db/index');
const routes = require('./api/componentRoutes');
const middelware = require('./middleware');
const app = express();
middelware.initRestMiddleware(app);
dbstart.start();
console.log("testrun");
routes.initRestRoutes(app);
exports.app = app