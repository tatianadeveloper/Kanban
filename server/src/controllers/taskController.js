const Task = require('../models/task');

exports.getTaskById = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const data = await Task.findById(taskId);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: 'Server error' });
  }
};
