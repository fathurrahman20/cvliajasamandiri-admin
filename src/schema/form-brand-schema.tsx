import { z } from "zod";

export const formBrandSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
});
