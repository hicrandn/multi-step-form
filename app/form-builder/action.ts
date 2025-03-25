//directly server side 
"use server";

import { revalidatePath } from "next/cache";

export async function createFormSubmission(data: any) {
  console.log("Veri gönderildi:", data);

  // Opsiyonel: Veritabanına kaydet
  // await db.form.create({ data: { ...data } });

  revalidatePath("/form-builder");
}
