import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Pending"],
    default: "Pending",
  },
  confirmCode: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  username: {
    type: String,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userdata: {
    description: {
      type: String,
      default: "",
    },
    coverPath: {
      type: String,
      default: "/images/cover.jpg",
    },
    subscriber: {
      type: Number,
      default: 0,
    },
    subscribing: {
      type: Number,
      default: 0,
    },
    musicAdded: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  lastPlayed: [
    {
      type: String,
      default: "",
    },
  ],
});
UserSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    console.log(this);
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});
const User = mongoose.model("User", UserSchema);
export default User;
