/*jshint esversion: 6 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const courseRoutes = require('./api/routes/course_details');

mongoose.connect('mongodb+srv://dragon-twister:' + process.env.MONGO_ATLAS_PASS +
                '@dragon-twister-hfmoi.mongodb.net/test?retryWrites=true', {
                    useNewUrlParser: true
                });

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/course_details', courseRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;