import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export type FormValues = z.infer<typeof formSchema>;
