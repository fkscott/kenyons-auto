import express, {Express} from "express";
const router = express.Router();

const {searchVehicles} = require("../controllers/search");

router.get("/", searchVehicles);

module.exports = router;
