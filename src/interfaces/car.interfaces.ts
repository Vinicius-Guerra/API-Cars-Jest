import { z } from "zod";
import { carCreateSchema, carGetManySchema, carSchema, carUpdateSchema } from "../schemas/car.schemas";

export type TCar = z.infer<typeof carSchema>;

export type TCarCreate = z.infer<typeof carCreateSchema>;

export type TCarGetMany = z.infer<typeof carGetManySchema>;

export type TCarUpdate = z.infer<typeof carUpdateSchema>;