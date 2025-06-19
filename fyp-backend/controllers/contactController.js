// routes/contact.js or controllers/contactController.js

import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    return res.status(200).json({
      success: true,
      message: "Your request has been submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting contact:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
