"use client";

import { UseFormReturn, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { uploadDocsSchema } from "@/lib/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";

type UploadDocsFormData = z.infer<typeof uploadDocsSchema>;

interface UploadDocsProps {
  onStepSubmit: (data: UploadDocsFormData) => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function UploadDocsPage({ onStepSubmit, isLastStep }: UploadDocsProps) {
  const form = useForm<UploadDocsFormData>({
    defaultValues: {
      resume: undefined,
    },
  });

  const onSubmit = (data: UploadDocsFormData) => {
    onStepSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="resume"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>CV/Özgeçmiş</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isLastStep ? "Complete" : "Next Step"}
        </Button>
      </form>
    </Form>
  );
}
