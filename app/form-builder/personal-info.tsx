"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";  
import { Input } from "@/components/ui/input";    
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";  
import { personalInfoSchema } from "@/lib/validation";  


  export default function PersonalInfoPage({ onNext }: { onNext: () => void }) {
    const form = useForm({
      resolver: zodResolver(personalInfoSchema),
      
      defaultValues: {
        fullName: "",  
        email: "",     
        phoneNumber: "", 
      },
    });

  const onSubmit = (data: any) => {
    console.log(data);
    onNext(); 
  };

  return (
    <Form {...form}>  
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
        <FormField
          control={form.control}
          name="fullName"
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
          name="email"
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
          name="phoneNumber"
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
         <Button type="submit">Submit</Button>

        
       
      </form>
    </Form>
  );
}
