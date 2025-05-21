'use server';
import { revalidatePath } from "next/cache";

export async function contactAction(formData){
  const rawFormData = {
    name: formData.get('name'),
    contactNumber: formData.get('contactNumber'),
    email: formData.get('email'),
    bestTime: formData.get('bestTime'),
    queryTime: formData.get('queryTime'),
    query: formData.get('query')
  }


  revalidatePath('contact');
}