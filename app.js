const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const FlightRoute = require("./routes/Flightroutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/flight", FlightRoute);

module.exports = app;
