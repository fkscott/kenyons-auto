"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const vehicleData = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "White",
        zipcode: "54321",
        price: 15000,
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2018,
        color: "Blue",
        zipcode: "67890",
        price: 12000,
    },
    {
        make: "Toyota",
        model: "RAV4",
        year: 2021,
        color: "Red",
        zipcode: "13579",
        price: 20000,
    },
    {
        make: "Ford",
        model: "Focus",
        year: 2017,
        color: "Gray",
        zipcode: "24680",
        price: 8000,
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Black",
        zipcode: "98765",
        price: 18000,
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2019,
        color: "Silver",
        zipcode: "54321",
        price: 14000,
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2020,
        color: "White",
        zipcode: "67890",
        price: 17000,
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2018,
        color: "Blue",
        zipcode: "13579",
        price: 13000,
    },
    {
        make: "Nissan",
        model: "Altima",
        year: 2017,
        color: "Silver",
        zipcode: "24680",
        price: 9000,
    },
    {
        make: "Toyota",
        model: "Prius",
        year: 2021,
        color: "Green",
        zipcode: "98765",
        price: 19000,
    },
    {
        make: "Volkswagen",
        model: "Golf",
        year: 2019,
        color: "Black",
        zipcode: "54321",
        price: 16000,
    },
    {
        make: "Mercedes-Benz",
        model: "C-Class",
        year: 2020,
        color: "Silver",
        zipcode: "67890",
        price: 35000,
    },
    {
        make: "BMW",
        model: "3 Series",
        year: 2021,
        color: "White",
        zipcode: "13579",
        price: 32000,
    },
    {
        make: "Audi",
        model: "A4",
        year: 2018,
        color: "Blue",
        zipcode: "24680",
        price: 28000,
    },
    {
        make: "Porsche",
        model: "911",
        year: 2022,
        color: "Red",
        zipcode: "98765",
        price: 100000,
    },
    {
        make: "Ferrari",
        model: "488 GTB",
        year: 2019,
        color: "Red",
        zipcode: "54321",
        price: 250000,
    },
    {
        make: "Lamborghini",
        model: "Huracan",
        year: 2020,
        color: "Yellow",
        zipcode: "67890",
        price: 300000,
    },
    {
        make: "Alfa Romeo",
        model: "Giulia",
        year: 2021,
        color: "Black",
        zipcode: "13579",
        price: 40000,
    },
    {
        make: "Fiat",
        model: "500",
        year: 2018,
        color: "White",
        zipcode: "24680",
        price: 15000,
    },
    {
        make: "Maserati",
        model: "Ghibli",
        year: 2022,
        color: "Blue",
        zipcode: "98765",
        price: 60000,
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Start seeding ...`);
        for (const v of vehicleData) {
            const vehicle = yield prisma.vehicle.create({
                data: v,
            });
            console.log(`Created vehicle with id: ${vehicle.id}`);
        }
        console.log(`Seeding finished.`);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
