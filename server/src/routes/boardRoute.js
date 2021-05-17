const { Router } = require('express');

const boardController = require('../controllers/boardController.js');

const router = Router();

router.get('/', boardController.getBoards);
router.get('/:id/columns', boardController.getColumns);

router.get('/:id', boardController.getBoardById);
router.get('/:id/tasks', boardController.getTasks);

module.exports = router;
