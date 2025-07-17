import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: 1,
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
  },
  height: {
    type: Number,
    required: [true, 'Height is required'],
    min: 1,
  },
  weight: {
    type: Number,
    required: [true, 'Weight is required'],
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'clint-details'
});

export default mongoose.models.Client || mongoose.model('Client', ClientSchema);
