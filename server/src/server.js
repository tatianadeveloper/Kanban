const express = require('express');
const mongoose = require('mongoose');
const { config } = require('./config/config');

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected');
});

const app = express();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

const api = '/api/';

app.use(`${api}boards`, require('./routes/boardRoute'));
app.use(`${api}tasks`, require('./routes/taskRoute'));

const PORT = config.port || 5000;

app.listen(PORT, () => {
  console.log('app is running');
});
