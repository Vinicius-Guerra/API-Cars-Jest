import { TCar, TCarCreate } from "../../interfaces/car.interfaces";

export const productDefaultExpect = (data: TCar, expectData: TCarCreate) => {
    expect(data.name).toBe(expectData.name);
    expect(data.description).toBe(expectData.description);
    expect(data.brand).toBe(expectData.brand);
    expect(data.year).toBe(expectData.year);
    expect(data.km).toBe(expectData.km);
}