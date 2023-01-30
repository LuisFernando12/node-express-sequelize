const express = require('express');
const EnrollmentController = require('./controller/enrollmentController');
const LevelController = require('./controller/LevelController');
const PersonController = require('./controller/PersonController');
const route = express.Router();
route.get('/health',(req, res)=>{res.json({ping:'pong'})});

route.get('/people', PersonController.find);
route.get('/people/:id', PersonController.get);
route.post('/people', PersonController.create);
route.put('/people/:id', PersonController.update);
route.delete('/people/:id', PersonController.delete);

route.get('/level', LevelController.find);
route.get('/level/:id', LevelController.get);
route.post('/level', LevelController.create);
route.put('/level/:id', LevelController.update);
route.delete('/level/:id', LevelController.delete);

route.get('/enrollment', EnrollmentController.find);
route.get('/enrollment/:id', EnrollmentController.get);
route.post('people/:student_id/enrollment/:id', EnrollmentController.create);
route.put('people/:student_id/enrollment/:id', EnrollmentController.update);
route.delete('/enrollment/:id', EnrollmentController.delete);

module.exports = route;