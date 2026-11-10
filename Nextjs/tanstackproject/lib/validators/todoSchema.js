import {z} from "zod";
export const todoSchema=z.object({
    title:z.string().trim().min(1,"title is required"),
    description:z.string().optional().default(""),
    completed:z.boolean().optional().default(false),
})

export const updateTodoSchema = z.object({
  title: z.string().trim().min(1, "Title is required").optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
});