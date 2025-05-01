import { z } from "zod";

export const faqSchema = z.object({
  question: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  answer: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
});
