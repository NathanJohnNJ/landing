'use server';
import clientPromise from "../mongodb";

export const addToDB = async (form) => {
  try {
    const client = await clientPromise;
    const db = client.db("NJTD");
    const newContactForm = await db.collection("contactforms").insertOne({
      name: form.name,
      phone: form.phone,
      email: form.email?form.email:null,
      bestTime: form.bestTime,
      anyTime: form.anyTime,
      queryTime: form.queryTime,
      query: form.query
    });
    return JSON.parse(JSON.stringify(newContactForm));
  } catch (error) {
    console.log(error)
  }
};

