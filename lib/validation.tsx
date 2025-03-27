import * as z from 'zod';

export const personalInfoSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long.").max(50, "Full name can be at most 50 characters long."),
  email: z.string().email("Please enter a valid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits long.").max(15, "Phone number can be at most 15 digits long."),
});

export const educationSchema = z.object({
  schoolName: z.string().min(3, "School name must be at least 3 characters long."),
  degree: z.string().min(2, "Degree must be at least 2 characters long."),
  graduationYear: z.string().regex(/^\d{4}$/, "Please enter a valid year.").length(4, "Please enter a valid year."),
});

export const experienceSchema = z.object({
  companyName: z.string().min(3, "Company name must be at least 3 characters long."),
  role: z.string().min(2, "Role must be at least 2 characters long."),
  startDate: z.date({ required_error: "Start date is required." }),
  endDate: z.date().optional(),
});


export const uploadDocsSchema = z.object({
  resume: z.instanceof(File).refine(file => file.type === "application/pdf", "Only PDF files are allowed."),
});
