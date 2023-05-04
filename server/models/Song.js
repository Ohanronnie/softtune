import mongoose from "mongoose";
const musicSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  musicLocation: {
    type: String,
    required: true,
  },
  coverLocation: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  lyrics: {
    type: String,
    default: "",
  },
  genre: {
   type: String,
   required: true
  },
  details: {
    streams: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    popular: {
      type: Number,
      default: 0,
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
 }
});
const Song = mongoose.model("Song", musicSchema);
export default Song;
