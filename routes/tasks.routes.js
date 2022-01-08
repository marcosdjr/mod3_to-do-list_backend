const express = require('express');
const router = express.Router();
const tasksController = require('./../controllers/tasks.controller.js');


router.get('/', tasksController.getTasks);

router.get('/:id', tasksController.getTaskById);

router.post('/add', tasksController.createTask);

router.put('/edit/:id', tasksController.editTask);

router.delete('/delete/:id', tasksController.deleteTask);

module.exports = router;
