const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  source: {
    type: String,
    require: [true, "source must be present"],
  },
  destination: {
    type: String,
    require: [true, "destination must be present"],
  },
  price: {
    type: Number,
    require: [true, "price must be present so that you have to pay"],
  },
  flights: {
    type: [String],
    require: [true, "Flights name must be there."],
  },
  date: {
    type: Date,
    // required: [true, "Date must be there"],
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
