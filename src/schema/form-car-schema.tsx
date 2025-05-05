import { z } from "zod";

export const formCarSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  imageUrl: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  brandId: z
    .string()
    .transform((val) => Number(val))
    .pipe(z.number()),
  priceFullDay: z
    .number()
    .min(5, { message: "Description must be at least 5 characters." }),
  priceHalfDay: z.number().positive(),
  year: z
    .string()
    .transform((year) => parseInt(year))
    .pipe(z.number().min(1900))
    .transform((year) => year.toString()),
  fuelType: z
    .string()
    .min(3, { message: "BBM setidaknya harus ada 3 karakter." }),
  transmission: z
    .string()
    .min(3, { message: "Transmisi  setidaknya harus ada 3 karakter." }),
  maxPassengers: z
    .number()
    .min(5, { message: "Max Penumpang setidaknya harus ada 5 karakter." }),
});
