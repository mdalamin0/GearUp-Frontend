import { z } from "zod";

export const gearSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(5, "Description is required"),
  brand: z.string().min(1, "Brand is required"),
  categoryId: z.string().uuid("Category is required"),
  rentalPrice: z.coerce.number().min(1, "Rental price must be greater than 0"),
  stock: z.coerce.number().min(1, "Stock must be at least 1"),
  image: z.string().url("Enter a valid image url"),
  length: z.string().min(1, "Length is required"),
  maxLoad: z.string().min(1, "Max load is required"),
  material: z.string().min(1, "Material is required"),
  weight: z.string().min(1, "Weight is required"),
});

export type TGearForm = z.input<typeof gearSchema>;
