import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

const vehicleData = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
    color: "Silver",
    zipcode: "12345",
    price: 10000,
    mileage: 50000,
  },
  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "White",
    zipcode: "54321",
    price: 15000,
    mileage: 40000,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Blue",
    zipcode: "67890",
    price: 12000,
    mileage: 55000,
  },
  {
    make: "Toyota",
    model: "RAV4",
    year: 2021,
    color: "Red",
    zipcode: "13579",
    price: 20000,
    mileage: 30000,
  },
  {
    make: "Ford",
    model: "Focus",
    year: 2017,
    color: "Gray",
    zipcode: "24680",
    price: 8000,
    mileage: 75000,
  },
  {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Black",
    zipcode: "98765",
    price: 18000,
    mileage: 25000,
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2019,
    color: "Silver",
    zipcode: "54321",
    price: 14000,
    mileage: 48000,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2020,
    color: "White",
    zipcode: "67890",
    price: 17000,
    mileage: 35000,
  },
  {
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    color: "Blue",
    zipcode: "13579",
    price: 13000,
    mileage: 60000,
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2017,
    color: "Silver",
    zipcode: "24680",
    price: 9000,
    mileage: 70000,
  },
  {
    make: "Toyota",
    model: "Prius",
    year: 2021,
    color: "Green",
    zipcode: "98765",
    price: 19000,
    mileage: 20000,
  },
  {
    make: "Volkswagen",
    model: "Golf",
    year: 2019,
    color: "Black",
    zipcode: "54321",
    price: 16000,
    mileage: 38000,
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    color: "Silver",
    zipcode: "67890",
    price: 35000,
    mileage: 27000,
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 2021,
    color: "White",
    zipcode: "13579",
    price: 32000,
    mileage: 31000,
  },
  {
    make: "Audi",
    model: "A4",
    year: 2018,
    color: "Blue",
    zipcode: "24680",
    price: 28000,
    mileage: 43000,
  },
  {
    make: "Porsche",
    model: "911",
    year: 2022,
    color: "Red",
    zipcode: "98765",
    price: 100000,
    mileage: 15000,
  },
  {
    make: "Ferrari",
    model: "488 GTB",
    year: 2019,
    color: "Red",
    zipcode: "54321",
    price: 250000,
    mileage: 8000,
  },
  {
    make: "Lamborghini",
    model: "Huracan",
    year: 2020,
    color: "Yellow",
    zipcode: "67890",
    price: 300000,
    mileage: 6000,
  },
  {
    make: "Alfa Romeo",
    model: "Giulia",
    year: 2021,
    color: "Black",
    zipcode: "13579",
    price: 40000,
    mileage: 28000,
  },
  {
    make: "Fiat",
    model: "500",
    year: 2018,
    color: "White",
    zipcode: "24680",
    price: 15000,
    mileage: 50000,
  },
  {
    make: "Maserati",
    model: "Ghibli",
    year: 2022,
    color: "Blue",
    zipcode: "98765",
    price: 60000,
    mileage: 20000,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const v of vehicleData) {
    const vehicle = await prisma.vehicle.create({
      data: v,
    });
    console.log(`Created vehicle with id: ${vehicle.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
