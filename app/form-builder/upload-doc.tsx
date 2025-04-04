"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { uploadDocsSchema } from "@/lib/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import SuccessMessage from "@/components/SuccessMessage"; 
import { zodResolver } from "@hookform/resolvers/zod";

type UploadDocsFormData = z.infer<typeof uploadDocsSchema>;

interface UploadDocsProps {
  onStepSubmit: (data: UploadDocsFormData) => void;
  isLastStep: boolean;
}

export default function UploadDocsPage({ onStepSubmit, isLastStep }: UploadDocsProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<UploadDocsFormData>({
    resolver: zodResolver(uploadDocsSchema),

    defaultValues: {
      resume: undefined,
    },
  });

  const onSubmit = (data: UploadDocsFormData) => {
    onStepSubmit(data);
    if (isLastStep) {
      setIsSubmitted(true); 
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />; 
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="resume"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf"
                  lang="en"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  
                  {...field}
                />
              </FormControl>
              
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
