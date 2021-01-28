const express = require('express');
const cors = require('cors');

const CarsRoutes = require('./routes/CarsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cars', CarsRoutes);

module.exports = app;
