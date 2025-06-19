import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Signup data:", name, email, password);

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // ❌ remove manual hash here
    const newUser = new User({ name, email, password }); // let schema pre-save handle it
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(201).json({ result: newUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", email, password);

    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: 'User not found' });

    console.log("User found:", existingUser);
    console.log("Hashed in DB:", existingUser.password);

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    console.log("Password correct?", isPasswordCorrect);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: existingUser._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


