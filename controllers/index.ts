import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

//import an hbjs instance so that i can render the vehicle data from getVehicle

const prisma = new PrismaClient();

const getIndex = async (req: Request, res: Response) => {
  try {
    res.send("helloWorld");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getIndex,
};
