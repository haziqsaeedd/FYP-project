// routes/serviceRoutes.js
import express from 'express';
import Service from '../models/Service.js'; // ✅ Corrected import

const router = express.Router();

router.get('/:category', async (req, res) => {
  const { category } = req.params;

  try {
    let services;

    if (category === 'All') {
      services = await Service.find();
    } else {
      services = await Service.find({
        category: { $regex: new RegExp(category, "i") }, // ✅ Case-insensitive match
      });
    }

   
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
