// models/Contact.js
import mongoose from 'mongoose';
// hashir update
// hashir update
// Verified Hashir commit 🚀

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    service: { type: String, required: true },
    category: { type: String }, // ✅ added category
    message: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
