const express = require("express");
const FlightController = require("./../controllers/Flightcontroller");

const router = express.Router();

router
  .route("/")
  .get(FlightController.getFlight)
  .post(FlightController.createFlight);

router
  .route("/:id")
  .get(FlightController.findByOne)
  .patch(FlightController.updateFlight)
  .delete(FlightController.deleteFlight);

module.exports = router;
