const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skills: { type: [String], required: true },
  role: { type: String, required: true },
  experienceLevel: { type: String, required: true }, 
  availability: { type: String, required: true }, 
  willingToMentor: { type: Boolean, default: false },
  reputationScore: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
