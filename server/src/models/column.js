const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
  order: { type: String },
});

schema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'columnId',
  options: { sort: { order: 1 } },
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

module.exports = model('Column', schema);
