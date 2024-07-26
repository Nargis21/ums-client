import { z } from "zod";

export const academicDepartmentSchema = z.object({
  name: z.string({ required_error: "Please enter a name" }),
  academicFaculty: z.string({
    required_error: "Please select a academic faculty",
  }),
});
