const express = require('express');
const bodyParser = require('body-parser');

const chinaso = require('./routes/chinaso');
const participante = require('./routes/participante');
const juez = require('./routes/juez');
const ronda = require('./routes/ronda');
const puntaje = require('./routes/puntaje');
const rondaJuez = require('./routes/ronda_juez');
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
app.use('/puntaje',  puntaje);
app.use('/rondaJuez',  rondaJuez);
let port = 1234;

app.listen(port, () => {
  console.log(`Servidor andando y corriendo en el puerto ${port} babe `);
});
