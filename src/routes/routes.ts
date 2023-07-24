import {Express} from "express";
const vehicleRouter = require("./vehicle");
const searchRouter = require("./search");

module.exports = function (app: Express) {
  app.use("/vehicle", vehicleRouter);
  app.use("/search", searchRouter);
};
