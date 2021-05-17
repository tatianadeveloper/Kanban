const { Router } = require('express');

const taskController = require('../controllers/taskController.js');

const router = Router();

router.get('/:id', taskController.getTaskById);

module.exports = router;
