import express from "express";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";
import home from "./routes/home.js";
import register from "./routes/register.js";
import multer from "multer";
import upload from "./routes/upload.js";
dotenv.config();
mongoose.connect(process.env.MONGOURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cookieparser("tp07089314662"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(async (req, res, next) => {
  const id = req.cookies.user_id || req.signedCookies.user_id;
  let url = req._parsedUrl.path || req.originalUrl;
  let result = await User.findOne({ _id: id });
  console.log(result);
  if (!url.includes("login") && !url.includes("signup")) {
    console.log(url.includes("login"));
    if (!req.cookies?.user_id && !req.signedCookies.user_id) {
      console.log(78);
      return res.status(500).json({
        error: "You must login first",
      });
    } else if (!result) {
      console.log(87)
      return res.status(500).json({
        error: "You must login first",
      });
    } else if (result) {
      console.log("Auth")
      next();
    }
  } else {
    next();
  }
});
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", home);
app.use("/register", register);
app.use("/upload", upload);
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
