import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import sendMail from "./sendmail.js";
class Register {
  constructor() {}
  static async login(req, res) {
    const mail = req.body?.mail;
    const pass = req.body?.pass;
    if (!mail || !pass) {
      res.status(200).json({
        message: pass
          ? `The ${mail ? "" : "Mail"} field ${
              pass ? "is compulsory" : "and the password field is compulsory"
            }`
          : `The password field is compulsory`,
      });
      return;
    }
    const result = await User.findOne({ mail: mail });
    if (!result) {
      res.status(200).json({
        message: "Invalid mail/password",
      });
      return;
    } else {
      if (!bcrypt.compareSync(pass, result.password)) {
        res.status(200).json({
          message: "Incorrect password",
        });
      } else {
        if (result.status === "Pending") {
          return res.status(200).json({
            message: "Please verify your email before you can continue",
          });
        }
        res.cookie("user_id", result._id, {
          httpOnly: true,
          maxAge: 900000000 * 1000000,
          secure: true,
          sameSite: "lax",
        });
        console.log(req.signedCookies);
        return res.status(200).json({
          message: "Authenticated",
        });
      }
    }
  }
  static async signup(req, res) {
    const { firstName, lastName, password, username, mail } = req.body;
    console.log(req.body);
    const token = jwt.sign({ mail: mail }, process.env.SECRET);
    const [fname, lname] = [firstName, lastName];
    const user = {
      firstName: fname?.trim?.(),
      lastName: lname?.trim?.(),
      password: password?.trim?.(),
      username: username?.trim?.(),
      mail: mail,
      confirmCode: token,
    };
    if (!fname || !lname || !password || !username || !mail)
      return res.status(200).json({
        message: "All fields must be filled",
      });
    else if (
      fname.length < 4 ||
      lname.length < 4 ||
      username.length < 3 ||
      !mail.includes("@") ||
      !mail.includes(".")
    )
      return res.status(200).json({
        message: "The field must be properly filled",
      });
    const userExist = await User.findOne({ username: username });
    const mailExist = await User.findOne({ mail: mail });
    if (userExist)
      return res.status(200).json({
        message: "Username taken",
      });
    else if (mailExist)
      return res.status(200).json({
        message: "Mail exists",
      });
    const data = new User(user);
    try {
      const save = await data.save();
      sendMail(
        mail,
        `
          <h1>Confirm your email</h1>
          <h3>If you didn't request this email, you can simply ignore</h3>
          <p>Click on the link below to verify your account</p>
          <button><a href="http://localhost:3000/register/verify/${token}">Verify</a></button>
        `,
        "Confirmation email"
      );
      return res.status(200).json({
        message: "Click the link from your gmail to verify your account",
      });
    } catch (err) {
      return res.status(200).json({
        message: err.message || "Error occured somewhere",
      });
    }
  }
  static async verify(req, res) {
    const token = req.params.code;
    console.log(token);
    try {
      const result = await User.findOne({ confirmCode: token });
      if (!result) return res.json({ error: "invalid token" });
      result.status = "Active";
      const save = await User.updateOne({ confirmCode: token }, result);
      res.json(null);
    } catch (err) {
      console.log(err);
      res
        .status(200)
        .send("Error occured somewhere... Try refreshing the page");
    }
  }
  static async userList(req, res) {
    const list = await User.find({}).select("username");
    console.log("Got a request in userlist");
    console.log(list);
    if (list) res.status(200).json(list.map((e) => e.username));
    else if (!list) res.status(200).json([]);
  }
  static async mailList(req, res) {
    const list = await User.find({}).select("mail");
    console.log("Got a request in maillist");
    console.log(list);
    if (list) res.status(200).json(list.map((e) => e.mail));
    else if (!list) res.status(200).json([]);
  }
}
export default Register;
