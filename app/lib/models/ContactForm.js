import mongoose, { Schema } from "mongoose";

const contactFormSchema = new Schema(
  {
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: false},
    bestTime: {type: String, required: false},
    anyTime: {type: Boolean, required: false},
    queryTime: {type: String, required: true},
    query: {type: String, required: true},
  },
  {
    timestamps: true
  }
);

 const ContactForm = mongoose.models.ContactForm || mongoose.model("ContactForm", contactFormSchema);

 export default ContactForm;