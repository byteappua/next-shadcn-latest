import { z } from "zod";

// Define the new schema based on the provided structure
export const taskSchema = z.object({
  项目: z.string(), // Exchange
  股票: z.string(), // Contract Code
  主板: z.string(), // Contract Name
  科创板: z.string(), // Variety Code
});

// Define the type based on the new schema
export type Stock = z.infer<typeof taskSchema>;
