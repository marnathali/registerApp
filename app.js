const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const chinaso = require('./routes/chinaso.route'); // Imports routes for the products
const participante = require('./routes/participante.route');
const juez = require('./routes/juez.route'); // Imports routes for the products
const ronda = require('./routes/ronda.route'); // Imports routes for the products


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
app.use('/products', product);
app.use('/products', chinaso);
app.use('/participante',  participante);
app.use('/juez',  juez);
app.use('/ronda',  ronda);
let port = 1234;

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port} `);
});
