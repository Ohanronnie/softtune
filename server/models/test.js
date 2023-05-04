import User from "./Song.js";
import mongo from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongo.connect(process.env.MONGOURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
(async () => {
  /*  let x = new User({password: "hello"});
  await x.save()*/
  console.log(await User.find({}));
})();
