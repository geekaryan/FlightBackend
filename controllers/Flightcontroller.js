const { data } = require("@tensorflow/tfjs-node");
const Flight = require("./../models/Flightmodel");

//getting the flights
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
