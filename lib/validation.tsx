import * as z from 'zod';


export const personalInfoSchema = z.object({
  fullName: z.string().min(3, "Ad ve Soyad en az 3 karakter olmalı.").max(50, "Ad ve Soyad en fazla 50 karakter olmalı."),
  email: z.string().email("Geçerli bir e-posta adresi girin."),
  phoneNumber: z.string().min(10, "Telefon numarası en az 10 haneli olmalı.").max(15, "Telefon numarası en fazla 15 haneli olmalı."),
});

export const educationSchema = z.object({
  schoolName: z.string().min(3, "Okul adı en az 3 karakter olmalı."),
  degree: z.string().min(2, "Derece en az 2 karakter olmalı."),
  graduationYear: z.string().regex(/^\d{4}$/, "Geçerli bir yıl girin.").length(4, "Geçerli bir yıl girin."),
});

export const experienceSchema = z.object({
  companyName: z.string().min(3, "Şirket adı en az 3 karakter olmalı."),
  role: z.string().min(2, "Pozisyon adı en az 2 karakter olmalı."),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih girin (YYYY-MM-DD)."),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Geçerli bir tarih girin (YYYY-MM-DD).").optional(),
});

export const uploadDocsSchema = z.object({
  resume: z.instanceof(File).refine(file => file.type === "application/pdf", "Sadece PDF dosyası yükleyebilirsiniz."),
});
