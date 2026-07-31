import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address").trim(),

  password: z.string().trim().min(1, "Passowrd is required"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
