// app/form/steps/experience/page.tsx

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { experienceSchema } from "@/lib/validation";  
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 

export default function ExperiencePage() {
  const form = useForm({
    resolver: zodResolver(experienceSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>  
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ad ve Soyad</FormLabel>
              <FormControl>
                <Input placeholder="Ad ve Soyad" {...field} />  
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
          name="startDate"
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
