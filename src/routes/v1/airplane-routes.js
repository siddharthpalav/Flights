const express = require("express");
const router = express.Router();
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

// /api/v1/airplane POST

router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAllAirplanes);

router.get("/:id", AirplaneController.getAirplane);

module.exports = router;
