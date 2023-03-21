const express = require('express');
const ClassController = require('./controller/ClassController');
const EnrollmentController = require('./controller/EnrollmentController');
const LevelController = require('./controller/LevelController');
const PersonController = require('./controller/PersonController');
const route = express.Router();
route.get('/health',(req, res)=>{res.json({ping:'pong'})});

route.get('/people', PersonController.find);
route.get('/people/all', PersonController.findAllPeople);
route.get('/people/:id', PersonController.get);
route.post('/people', PersonController.create);
route.put('/people/:id', PersonController.update);
route.delete('/people/:id', PersonController.delete);
route.post('/people/:id', PersonController.restore);
route.post('/people/:student_id/cancel', PersonController.cancelPeople);

route.get('/level', LevelController.find);
route.get('/level/:id', LevelController.get);
route.post('/level', LevelController.create);
route.put('/level/:id', LevelController.update);
route.delete('/level/:id', LevelController.delete);
route.post('/level/:id', LevelController.restore);

route.get('/class', ClassController.find);
route.get('/class/:id', ClassController.get);
route.post('/people/:teacher_id/level/:level_id/class', ClassController.create);
route.put('/class/:id', ClassController.update);
route.delete('/class/:id', ClassController.delete);
route.post('/class/:id', ClassController.restore);

route.get('/enrollment', EnrollmentController.find);
route.get('/enrollment/:id', EnrollmentController.get);
route.get('/enrollment/:classId/class', EnrollmentController.getEnrollmentByClass);
route.get('/people/enrollment/full/class', EnrollmentController.getFullEnrollment);
route.get('/people/:student_id/enrollment', EnrollmentController.getEnrollment);
route.post('/people/:student_id/class/:class_id/enrollment', EnrollmentController.create);
route.put('/enrollment/:id', EnrollmentController.update);
route.delete('/enrollment/:id', EnrollmentController.delete);
route.post('/enrollment/:id', EnrollmentController.restore);

module.exports = route;