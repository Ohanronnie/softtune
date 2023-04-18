import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log([req]);
    let destination = "";
    if (file.mimetype.startsWith("image/")) {
      destination = "assets/images/";
    } else if (file.mimetype.startsWith("audio/")) {
      destination = "assets/musics/";
    }
    console.log(destination);
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    const date = Date.now();
    const mime = file.mimetype.split("/");
    const location = `SOFTUNE_${
      mime[0] === "image" ? "IMG" : "AUD"
    }_${date}.${mime[1].toLowerCase()}`;
    console.log(location);
    cb(null, location);
  },
});
const upload = multer({ storage: storage });
export default upload
