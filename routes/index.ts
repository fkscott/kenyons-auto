import express from "express";
const router = express.Router();

const {getIndex} = require("../controllers/index");

router.get("/", getIndex);

module.exports = router;
