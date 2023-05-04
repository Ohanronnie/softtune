import Song from "../models/Song.js";
class Content {
  static async popular(req, res) {
    const song = await Song.find({});
    song.sort((a, b) => b.streams - a.streams);
    res.json(song.slice(0, 5));
  }
}
export default Content;
