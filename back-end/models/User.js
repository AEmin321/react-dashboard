import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 7,
      required: true,
    },
    city: {
      type: String,
      min: 3,
    },
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
