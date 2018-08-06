/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Course = require('../models/course_details');

router.post('/:department_name/:year', (req, res, next) => {
    const dName = req.params.department_name;
    const year = req.params.year;

    const course = new Course({
        _id: new mongoose.Types.ObjectId(),
        department_name: dName,
        year: year,
        course_code: req.body.code,
        course_name: req.body.name,
        course_credit: req.body.credit,
        details: req.body.details
    });

    course
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created course successfully!',
                createdCourse: {
                    _id: result._id,
                    department_name: result.department_name,
                    year: result.year,
                    course_code: result.course_code,
                    course_name: result.course_name,
                    course_credit: result.course_credit,
                    details: result.details,
                    request: {
                        type: 'GET',
                        url: "http://localhost/3000/course_details/" + result._id
                    }
                }
            });
        })
        .catch(err => console.log(err));
});

router.get('/', (req, res, next) => {
    Course.find()
        .select('_id department_name year course_code course_name course_credit details')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                courses: docs.map(doc => {
                    return{
                        _id: doc._id,
                        department_name: doc.department_name,
                        year: doc.year,
                        course_code: doc.course_code,
                        course_name: doc.course_name,
                        course_credit: doc.course_credit,
                        course_details: doc.details,
                        request: {
                            type: "GET",
                            url: "http://localhost/3000/course_details/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);
            
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({error: err});
        });
});

router.get('/:department_name', (req, res, next) => {
    Course.find({department_name: req.params.department_name})
        .select('_id department_name year course_code course_name course_credit details')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                courses: docs.map(doc => {
                    return{
                        _id: doc._id,
                        department_name: doc.department_name,
                        year: doc.year,
                        course_code: doc.course_code,
                        course_name: doc.course_name,
                        course_credit: doc.course_credit,
                        course_details: doc.details,
                        request: {
                            type: "GET",
                            url: "http://localhost/3000/course_details/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);
            
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({error: err});
        });
});

router.get('/:department_name/:year', (req, res, next) => {
    Course.find({department_name: req.params.department_name, year: req.params.year})
        .select('_id department_name year course_code course_name course_credit details')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                courses: docs.map(doc => {
                    return{
                        _id: doc._id,
                        department_name: doc.department_name,
                        year: doc.year,
                        course_code: doc.course_code,
                        course_name: doc.course_name,
                        course_credit: doc.course_credit,
                        course_details: doc.details,
                        request: {
                            type: "GET",
                            url: "http://localhost/3000/course_details/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);
            
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({error: err});
        });
});

router.get('/:department_name/:year/:course_code', (req, res, next) => {
    const dName = req.params.department_name;
    const year = req.params.year;
    const course_code = req.params.course_code;
    
    Course.find({department_name: dName, year: year, course_code: course_code})
        .select('_id department_name year course_code course_name course_credit details')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                courses: docs.map(doc => {
                    return{
                        _id: doc._id,
                        department_name: doc.department_name,
                        year: doc.year,
                        course_code: doc.course_code,
                        course_name: doc.course_name,
                        course_credit: doc.course_credit,
                        course_details: doc.details,
                        request: {
                            type: "GET",
                            url: "http://localhost/3000/course_details/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);
            
        })
        .catch(err => {
            console.log(error);
            res.status(500).json({error: err});
        });
});

router.patch('/:department_name/:year/:course_code', (req, res, next) => {
    const dName = req.params.department_name;
    const year = req.params.year;
    const course_code = req.params.course_code;

    const updateOps = {};

    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Course.update({department_name: dName, year: year, course_code: course_code}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.delete('/', (req, res, next) => {
    Course.remove()
        .exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.delete('/:department_name', (req, res, next) => {
    Course.remove({department_name: req.params.department_name})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.delete('/:department_name/:year', (req, res, next) => {
    Course.remove({department_name: req.params.department_name, year: req.params.year})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.delete('/:department_name/:year/:course_code', (req, res, next) => {
    const dName = req.params.department_name;
    const year = req.params.year;
    const course_code = req.params.course_code;

    Course.remove({department_name: dName, year: year, course_code: course_code})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;