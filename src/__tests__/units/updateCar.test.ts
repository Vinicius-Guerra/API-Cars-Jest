import { CarServices } from "../../services/car.services";
import { carMock, carUpdateBodyMock } from "../mocks/car.mock";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: update car", () => {
    test("update car should work correctly", async () => {
        const carServices = new CarServices();

        const newCarExpect = { ...carMock, ...carUpdateBodyMock };

        prismaMock.car.update.mockResolvedValue(newCarExpect);

        const data = await carServices.update(carMock.id ,carUpdateBodyMock);

        expect(data).toStrictEqual(newCarExpect);
    })
});