const { data } = require("@tensorflow/tfjs-node");
const Flight = require("./../models/Flightmodel");

//getting all  the flights
exports.getFlight = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(201).json({
      status: "success",
      length: flights.length(),
      data: {
        flights,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//getting one flight
exports.findByOne = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json({
      status: "success",
      length: flight.length,
      data: {
        flight,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//making the fligts

exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        flight,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
