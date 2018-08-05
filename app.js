/*jshint esversion: 6 */

const express = require('express');
const app = express();
const course_detailsRoutes = require('.api/routes/course_details');

app.use('/course_details', courseRoutes);

module.exports = app;