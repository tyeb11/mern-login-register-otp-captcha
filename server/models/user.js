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
});

export const User = mongoose.model("User", UserSchema);
