/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request for /course_details'
    });
});

router.get('/:department_name', (req, res, next) => {
    const name  = req.params.department_name;

    res.status(200).json({
        message: 'Handling GET request for /course_details',
        id: name
    });
});

router.post('/:department_name/:year/:semester', (req, res, next) => {
    const course = {
        code: req.body.code,
        name: req.body.name,
        credit: req.body.credit,
        details: req.body.details
    };

    res.status(201).json({
        message: 'Course has been added',
        createdCourse: course
    });
});

module.exports = router;