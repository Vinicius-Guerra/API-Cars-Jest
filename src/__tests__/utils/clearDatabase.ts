import { prisma } from "../../database/prisma";

beforeEach(async () => {
    prisma.car.deleteMany();
});