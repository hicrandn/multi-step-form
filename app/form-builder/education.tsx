"use client";

import { UseFormReturn, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { educationSchema } from "@/lib/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";

type EducationFormData = z.infer<typeof educationSchema>;

interface EducationProps {
  onStepSubmit: (data: EducationFormData) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function EducationPage({ onStepSubmit }: EducationProps) {
  const form = useForm<EducationFormData>({
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="schoolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Okul Adı</FormLabel>
              <FormControl>
                <Input placeholder="Okul Adı" {...field} required />
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
              <FormLabel>Derece</FormLabel>
              <FormControl>
                <Input placeholder="Örn: Lisans, Yüksek Lisans" {...field} required />
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
              <FormLabel>Mezuniyet Yılı</FormLabel>
              <FormControl>
                <Input type="text" placeholder="YYYY" {...field} required />
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
