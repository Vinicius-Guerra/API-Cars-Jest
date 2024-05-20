import { carCreateBodyMock, carInvalidCreateBodyMock } from "../mocks/car.mock"
import { carDefaultExpect } from "../utils/carDefaultExpects"
import { request } from "../utils/request"

describe("Integration test: create car", () => {
    test("should be able to create a car successfully", async () => {
        const data = await request
            .post("/cars")
            .send(carCreateBodyMock)
            .expect(201)
            .then(response => response.body)
        
        expect(data.id).toBeDefined();
        carDefaultExpect(data, carCreateBodyMock);
    });

    test("should throw error when try to create a car with invalid data types", async () => {
        const data = await request
            .post("/cars")
            .send(carInvalidCreateBodyMock)
            .expect(400)
    });
})