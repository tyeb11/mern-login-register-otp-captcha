import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "what is your name?"],
    unique: false,
  },
  password: {
    type: String,
    required: [true, "please provide a strong and secure password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "please provide a unique email ID"],
    unique: true,
  },
  user_type: {
    type: String,
    default: "user",
  },
  otp: {
    type: String,
  },
  email_verified: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String,
    required: [true, "please provide state name"],
  },
  city: { type: String, required: [true, "please provide city name"] },
  subject: { type: String, required: [true, "please provide subject name"] },
  test_date: { type: Date, required: [true, "please provide test date"] },
  time_slot: { type: String, required: [true, "please provide time slot"] },
});

export const User = mongoose.model("User", UserSchema);
