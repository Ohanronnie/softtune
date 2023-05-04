import Song from "../models/Song.js";
import User from "../models/User.js";
class Upload {
  /*  constructor(){

  }*/
  static async song(req, res) {
    console.log(req.files);
    console.log(req.body);
    const file = req.files;
    const audio = file.audio[0];
    const image = file.image[0];
    try {
      let user = await User.findOne({ _id: req.cookies.user_id });
      if (!user) {
        return res.status(401).json({
          err: "Invalid credentials",
        });
      }
      let id = user._id;
      let musicDetails = {
        user: id,
        musicLocation: audio.filename,
        coverLocation: image.filename,
        artist: req.body.artist.trim(),
        title: req.body.title.trim(),
        album: "",
        genre: req.body.genre.trim(),
        description: req.body.description.trim(),
        lyrics: req.body.lyrics || "",
        details: {
          streams: 0,
          rating: 0,
          popular: 0,
        },
        createdAt: new Date(),
      };
      const Music = new Song(musicDetails);
      user.userdata.musicAdded++;
      let response = await Music.save();
      let result = await User.updateOne({ _id: id }, user);
      console.log(response, result);
      console.log(musicDetails);
      console.log(id);
    } catch (err) {
      return res.status(501).json({
        err: "Unknown error occured",
      });
    }
  }
}
export default Upload;
