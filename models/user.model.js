import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
  },
  name: {
    type: String,
    required: true
  },
  phone:{
type:Number,
required:true,
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non Binary'],
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 18 
  },
  otp:{
type:Number,
  },
  journals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journal'
  }]
}, {
  timestamps: true
});

const User = mongoose.model('User ', userSchema);
export default User;