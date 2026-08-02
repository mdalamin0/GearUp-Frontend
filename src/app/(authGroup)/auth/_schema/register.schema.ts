import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),

  email: z.email("Please enter a valid email address").trim().toLowerCase(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),

  // role: z.enum(["CUSTOMER", "PROVIDER"], {
  //   message: "Please select a role",
  // }),
  role: z.enum(["CUSTOMER", "PROVIDER"]).optional(),
});


export type RegisterSchemaType = z.infer<typeof registerSchema>;
