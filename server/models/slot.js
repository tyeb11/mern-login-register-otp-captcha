import mongoose from "mongoose";

export const SlotSchema = mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  state: {
    type: String,
    required: [true, "please provide state name"],
  },
  city: { type: String, required: [true, "please provide city name"] },
  subject: { type: String, required: [true, "please provide subject name"] },
  test_date: { type: String, required: [true, "please provide test date"] },
  time_slot: { type: String, required: [true, "please provide time slot"] },
});

export const Slot = new mongoose.model("Slot", SlotSchema);
