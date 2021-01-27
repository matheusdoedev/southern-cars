const express = require('express');

const CarsController = require('../app/controllers/CarsController');

const routes = express.Router();

routes.put('/:id', CarsController.putUpdateCar);

routes.delete('/:id', CarsController.deleteCar);

routes.post('/', CarsController.postCreateCar);

routes.get('/', CarsController.getCarByName);

routes.get('/', CarsController.getAllCars);

routes.get('/:id', CarsController.getCarById);

module.exports = routes;
