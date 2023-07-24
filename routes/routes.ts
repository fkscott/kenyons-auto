import {Express} from "express";
const vehicleRouter = require("./vehicle");
const searchRouter = require("./search");
const indexRouter = require("./index");

module.exports = function (app: Express) {
  app.use("/", indexRouter);
  app.use("/vehicle", vehicleRouter);
  app.use("/search", searchRouter);
};
