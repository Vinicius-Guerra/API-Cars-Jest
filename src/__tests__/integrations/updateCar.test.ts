import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carInvalidUpdateBodyMock, carUpdateBodyMock } from "../mocks/car.mock";
import { carDefaultExpect } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
    test("should be able to update car successfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });
        
        const data = await request
            .patch(`/cars/${car?.id}`)
            .send(carUpdateBodyMock)
            .expect(200)
            .then(response => response.body)

        carDefaultExpect(data, carUpdateBodyMock);
        });

        test("should throw error when try to update a car with invalid data types", async () => {
            const car = await prisma.car.create({ data: carCreateBodyMock });

            const data = await request
                .patch(`/cars/${car?.id}`)
                .send(carInvalidUpdateBodyMock)
                .expect(400)
        });

        test("should throw error when try to update a invalid car", async () => {
            const data = await request
                .patch(`/cars/a3f3ca8a-5cc5-437e-9588-1eab725cd0a8`)
                .expect(404)
                .then(response => response.body)

            expect(data.message).toBe("Car not found.");
        });
});