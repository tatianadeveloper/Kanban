const Board = require('../models/board');
const Column = require('../models/column');
const Task = require('../models/task');

exports.getBoards = async (req, res, next) => {
  try {
    const data = await Board.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: 'Server error' });
  }
};

exports.getBoardById = async (req, res, next) => {
  try {
    const data = await Board.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: 'Server error' });
  }
};

exports.getColumns = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const data = await Column.find({ boardId: boardId }).populate({
      path: 'tasks',
    });
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: 'Server error' });
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const tasks = await Task.find({ boardId: boardId });

    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: 'Server error' });
  }
};
