import * as z from 'zod';

export const step1Schema = z.object({
  fullName: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  email: z.string().email('Geçerli bir e-posta giriniz'),
});

export const step2Schema = z.object({
  wantsNewsletter: z.boolean(),
  topics: z.array(z.string()).min(1, 'En az bir konu seçmelisiniz').optional(),
});
