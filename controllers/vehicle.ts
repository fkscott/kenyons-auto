import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

//import an hbjs instance so that i can render the vehicle data from getVehicle

const prisma = new PrismaClient();

const getVehicle = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.render("vehicle", {vehicle});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVehicle,
};
