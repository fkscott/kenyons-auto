import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const searchVehicles = async (req: Request, res: Response) => {
  try {
    const make = req.query.make as string;
    const model = req.query.model as string;

    console.log(make, model);

    const vehicles = await prisma.vehicle.findMany({
      where: {
        make: make,
        model: model,
      },
    });
    res.json(vehicles);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  searchVehicles,
};
