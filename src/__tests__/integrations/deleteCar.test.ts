import { prisma } from "../../database/prisma";
import { carCreateBodyMock } from "../mocks/car.mock";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    test("should be able to delete car successfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });
        
        const data = await request
            .delete(`/cars/${car?.id}`)
            .expect(204)
        });

        test("should throw error when try to update a invalid car", async () => {
            const data = await request
                .patch(`/cars/a3f3ca8a-5cc5-437e-9588-1eab725cd0a8`)
                .expect(404)
                .then(response => response.body)

            expect(data.message).toBe("Car not found.");
        });
});