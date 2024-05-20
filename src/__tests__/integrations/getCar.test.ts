import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carCreateListMock, carMock } from "../mocks/car.mock";
import { carDefaultExpect } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: get car", () => {
    test("Should be able to get many car sucessfully", async () => {
        await prisma.car.createMany({ data: carCreateListMock });

        const data = await request  
            .get("/cars")
            .expect(200)
            .then(response => response.body);

            expect(data).toHaveLength(2);

            expect(data[0].id).toBeDefined();
            carDefaultExpect(data[0], carCreateListMock[0]);
            
            expect(data[1].id).toBeDefined();
            carDefaultExpect(data[1], carCreateListMock[1]);
    });

    test("should be throw error when try get a task with a invalid id", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });

        const id = car.id + "abcde1";
        
        const data = await request
            .get(`/cars/${id}`)
            .expect(404)
            .then(response => response.body)

        expect(data.message).toBe("Car not found.");
    });
});