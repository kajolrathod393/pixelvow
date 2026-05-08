import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    shootType: {
      type: String,
      required: [true, 'Shoot type is required'],
    },
    preferredDate: {
      type: Date,
    },
    message: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'confirmed', 'completed', 'cancelled'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Booking ||
  mongoose.model('Booking', BookingSchema);
