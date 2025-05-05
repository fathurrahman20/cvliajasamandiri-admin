import { z } from "zod";

export const formCarSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  imageId: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  imageUrl: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  brandId: z.string(),
  //   .string()
  //   .transform((val) => Number(val))
  //   .pipe(z.number()),
  priceFullDay: z.string(),
  priceHalfDay: z.string(),
  year: z.string(),
  fuelType: z
    .string()
    .min(3, { message: "BBM setidaknya harus ada 3 karakter." }),
  transmission: z
    .string()
    .min(3, { message: "Transmisi  setidaknya harus ada 3 karakter." }),
  maxPassengers: z.string(),
});
