const express = require('express');
const bodyParser = require('body-parser');

const chinaso = require('./routes/chinaso'); // Imports routes for the products
const participante = require('./routes/participante');
const juez = require('./routes/juez'); // Imports routes for the products
const ronda = require('./routes/ronda'); // Imports routes for the products


const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://nath:abc123@ds119768.mlab.com:19768/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/chinaso', chinaso);
app.use('/participante',  participante);
app.use('/juez',  juez);
app.use('/ronda',  ronda);
let port = 1234;

app.listen(port, () => {
  console.log(`Servidor andando y corriendo en el puerto ${port} babe `);
});
