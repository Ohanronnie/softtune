import User from "../models/User.js";
import Song from "../models/Song.js";
class Content {
  constructor() {}
  static async getContent(req, res) {
    let { limit, genre } = req.query;
    if (genre === "any") {
      let allSong = await Song.find({}).limit(Number(limit));
      let songToBeSent = [];
      allSong.map(async (value, index, array) => {
        let eachUser = await User.findOne({ _id: value.user }).select(
          "firstName lastName"
        );
        delete value._doc.user;
        delete eachUser._doc._id;
        songToBeSent.push({
          ...value._doc,
          ...eachUser._doc,
        });
        if (index === array.length - 1) {
          return res.status(200).json(songToBeSent);
        }
      });
    }
  }
  static async next(req, res) {
    let { current, genre } = req.query;
  }
}
export default Content;
