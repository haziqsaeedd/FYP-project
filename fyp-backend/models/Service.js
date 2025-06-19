import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: String,
  category: String,
  rating: Number,
  reviews: Number,
  price: Number,
  distance: String,
  image: String
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;
