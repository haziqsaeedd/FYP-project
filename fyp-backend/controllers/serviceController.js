import Service from '../models/Service.js';

export const getAllServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

export const getServicesByCategory = async (req, res) => {
  const { category } = req.params;
  if (category === 'All') {
    const services = await Service.find();
    return res.json(services);
  }

  const services = await Service.find({ category });
  res.json(services);
};
