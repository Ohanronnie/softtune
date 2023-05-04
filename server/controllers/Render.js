import fs from "fs";
import Song from "../models/Song.js";

class Music {
  constructor() {}
  static async music(req, res) {
    if (!req.cookies) return;
    if (!req.cookies.user_id) return;
    const id = req.params.id;
    const src = await Song.findOne({ musicLocation: id }).select(
      "musicLocation"
    );
    return fs.createReadStream(`assets/musics/${src.musicLocation}`).pipe(res);
  }
  static async image(req, res) {
    if (!req.cookies) return;
    if (!req.cookies.user_id) return;
    const id = req.params.id;
    const src = await Song.findOne({ coverLocation: id }).select(
      "coverLocation"
    );
    return fs.createReadStream(`assets/images/${src.coverLocation}`).pipe(res);
  }
}
export default Music;
