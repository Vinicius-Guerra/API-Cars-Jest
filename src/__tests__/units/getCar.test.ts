import { CarServices } from "../../services/car.services";
import { carListMock } from "../mocks/car.mock";
import { prismaMock } from "../mocks/prisma";
import { carDefaultExpect } from "../utils/carDefaultExpects";

describe("Unit test: get many car", () => {
    test("get many car should work correctly", async () => {
        prismaMock.car.findMany.mockResolvedValue(carListMock);

        const carServices = new CarServices();

        const data = await carServices.getMany();

        expect(data).toHaveLength(carListMock.length);
        carDefaultExpect(data[0], carListMock[0]);
        carDefaultExpect(data[1], carListMock[1]);
    });
});