const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  dueDate: { type: Date },
  label: [{ type: Schema.ObjectId, ref: 'Label' }],
  color: { type: String },
  order: { type: String },
  boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
  columnId: { type: Schema.Types.ObjectId, ref: 'Column', required: true },
  swimlaneId: { type: Schema.Types.ObjectId, ref: 'Swimlane', required: true },
});

module.exports = model('Task', schema);
