import User from "../models/User.js";
import bcrypt from "bcryptjs";
class Home {
  constructor() {}
  static async home(req, res, next) {
    const mail = req.cookies?.user?.mail;
    const pass = req.cookies?.user?.pass;
    const user = await User.findOne({ mail: mail });
    const result = bcrypt.compareSync(`${user?.password}`, `${pass}`);
    if (!req.cookies || !mail || !pass || !result) {
      res.status(302).json({
        message: "You have to login to continue",
        url: "/register/login",
      });
      console.log(pass);
      return;
    } else {
    }
  }
}
export default Home;
