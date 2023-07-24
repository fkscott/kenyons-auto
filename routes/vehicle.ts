import express from "express";
const router = express.Router();

const {getVehicle} = require("../controllers/vehicle");
router.get("/:id", getVehicle);

module.exports = router;
