const { json } = require("express");
const Flight = require("./../models/Flightmodel");

//getting all  the flights
exports.getFlight = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFileds = ["page", "sort", "limit", "fields"];

    excludeFileds.forEach((el) => delete queryObj[el]);

    // console.log(req.query, queryObj);
    // const flights = await Flight.find({
    //   date: 2023 - 01 - 23,
    // });

    //greater and less than filtering(advanced filtering)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // console.log(JSON.parse(queryStr));

    //gte,gt,lte,lt
    let query = Flight.find(JSON.parse(queryStr));

    //adding the sort techinque to sort according to prices of the tickets..
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }
    const flights = await query;
    res.status(200).json({
      status: "success",
      length: flights.length,
      // length: flights.length(),
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
    res.status(200).json({
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

//update the flight

exports.updateFlight = async (req, res) => {
  try {
    const flightUpdate = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        flightUpdate,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//delete the flight
exports.deleteFlight = async (req, res) => {
  try {
    const deleteFlight = await Flight.findByIdAndDelete(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
