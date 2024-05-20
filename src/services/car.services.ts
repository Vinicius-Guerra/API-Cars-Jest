import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCar, TCarCreate, TCarUpdate } from "../interfaces/car.interfaces";
import { carGetManySchema, carSchema } from "../schemas/car.schemas";

@injectable()
export class CarServices {
    async create(body: TCarCreate): Promise<TCar> {
        const data = await prisma.car.create({ data: body });

        return carSchema.parse(data);
    };

    async getMany(): Promise<TCar[]> {
        const carList = await prisma.car.findMany();

        return carGetManySchema.parse(carList);
    };

    async getOne(id: string): Promise<TCar> {
        const data = await prisma.car.findFirst({ where: { id }});

        return carSchema.parse(data);
    };

    async update(id: string, body: TCarUpdate): Promise<TCar> {
        const updateCar = await prisma.car.update({ data: body, where: { id }});

        return carSchema.parse(updateCar);
    }

    async delete(id: string): Promise<void> {
        await prisma.car.delete({ where: { id }});
    }
 }