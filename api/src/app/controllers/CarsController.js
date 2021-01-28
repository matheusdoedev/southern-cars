const Cars = require('../models/Cars');

class CarsController {
  // get all cars
  static async getAllCars(req, res) {
    const cars = await Cars.findAll();

    return res.status(200).json({ message: 'All cars listed', cars });
  }

  // create new car
  static async postCreateCar(req, res) {
    const { name, manufacturer, color, price, qty } = req.body;

    try {
      await Cars.create({
        name,
        manufacturer,
        color,
        price,
        qty,
      });

      return res.status(201).json({ message: 'Car created!' });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  // edit a car by id
  static async putUpdateCar(req, res) {
    const { name, manufacturer, color, price, qty } = req.body;
    const { id } = req.params;

    try {
      await Cars.update(
        {
          name,
          manufacturer,
          color,
          price,
          qty,
        },
        { where: { id } }
      );
      return res.status(200).json({ message: 'Car updated!', carId: id });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  // delete a car
  static async deleteCar(req, res) {
    const { id } = req.params;

    try {
      await Cars.destroy({ where: { id } });

      return res.status(200).json({ message: 'Car deleted!', carId: id });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  // get car by query params
  static async getCarByName(req, res) {
    const { name, manufacturer, priceRange, color } = req.query;

    let params = {};

    name ? (params.name = name) : '';
    manufacturer ? (params.manufacturer = manufacturer) : '';
    color ? (params.color = color) : '';

    try {
      const cars = await Cars.findAll({
        where: params,
      });

      return res.status(200).json({ message: 'Car found', cars });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  // get car by id
  static async getCarById(req, res) {
    const { id } = req.params;

    try {
      const car = await Cars.findOne({ where: { id } }).then((r) => r.get());

      return res.status(200).json({ ...car });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

module.exports = CarsController;
