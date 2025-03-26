

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { educationSchema } from "@/lib/validation";  
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"; 
import { Input } from "@/components/ui/input";  

export default function EducationPage() {
  const form = useForm({
    resolver: zodResolver(educationSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
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
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input type="email" placeholder="E-posta" {...field} />
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
              <FormLabel>Telefon Numarası</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Telefon Numarası" {...field} />
              </FormControl>
              <FormMessage /> 
            </FormItem>
          )}
        />

        
       
      </form>
    </Form>
  );
}
