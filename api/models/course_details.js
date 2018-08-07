/* jshint esversion: 6 */

const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    department_name: {type: String, required: true},
    year: {type: Number, required: true},
    course_code: {type: String, required: true},
    course_name: {type: String, required: true},
    course_credit: {type: Number, required: true},
    details: {type: String, required: true}
});

module.exports = mongoose.model('Course', courseSchema);