import { array, z } from "zod";

export const carSchema = z.object({
    id: z.string().min(1).uuid(),
    name: z.string().min(1),
    description: z.string().optional().nullish(),
    brand: z.string().min(1),
    year: z.number().int().positive(),
    km: z.number().int().positive()
});

export const carCreateSchema = carSchema.omit({ id: true });

export const carGetManySchema = array(carSchema);

export const carUpdateSchema = carCreateSchema.partial();