// app/form/steps/experience/page.tsx

"use client";

import { UseFormReturn, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { experienceSchema } from "@/lib/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";

type ExperienceFormData = z.infer<typeof experienceSchema>;

interface ExperienceProps {
  onStepSubmit: (data: ExperienceFormData) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function ExperiencePage({ onStepSubmit }: ExperienceProps) {
  const form = useForm<ExperienceFormData>({
    defaultValues: {
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
    },
  });

  const onSubmit = (data: ExperienceFormData) => {
    onStepSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Software Developer" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} required />
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
  );
}
