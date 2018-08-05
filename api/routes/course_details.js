/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request for /course_details'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request for /course_details'
    });
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PUT request for /course_details'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling DELETE request for /course_details'
    });
});

module.exports = router;