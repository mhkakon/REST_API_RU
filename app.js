/*jshint esversion: 6 */

const express = require('express');
const app = express();
const courseRoutes = require('./api/routes/course_details');

app.use('/course_details', courseRoutes);

module.exports = app;