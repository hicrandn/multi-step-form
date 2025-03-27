"use client";

import { UseFormReturn, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { educationSchema } from "@/lib/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Step } from "@/components/Stepper";
import { zodResolver } from "@hookform/resolvers/zod";

type EducationFormData = z.infer<typeof educationSchema>;

interface EducationProps {
  onStepSubmit: (data: EducationFormData) => void;
  onBack: () => void;
}

export default function EducationPage({ onStepSubmit }: EducationProps) {
  const form = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      schoolName: "",
      degree: "",
      graduationYear: "",
    },
  });

  const onSubmit = (data: EducationFormData) => {
    onStepSubmit(data);
  };

  return (
    <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="schoolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Name</FormLabel>
              <FormControl>
                <Input placeholder="School Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="degree"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Degree</FormLabel>
              <FormControl>
                <Input placeholder="Ex:Bachelor's Degree" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="graduationYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Graduation Year</FormLabel>
              <FormControl>
              <Input type="text" placeholder="Enter year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Next Step
        </Button>
      </form>
    </Form>
    </div>
  );
}
