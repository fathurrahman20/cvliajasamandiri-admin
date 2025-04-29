import { z } from "zod";

export const formRequirementSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
});
