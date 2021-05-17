const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    closed: { type: Boolean, default: false },
    starred: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model('Board', schema);
