import nodemailer from "nodejs-nodemailer-outlook";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env);
const send = (to, html, subject) => {
  return new Promise((resolve, reject) => {
    nodemailer.sendEmail({
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS,
      },
      from: process.env.MAILUSER,
      to: to,
      subject: subject,
      html: html,
      text: "",
      onSuccess: (e) => resolve(e),
      onError: (e) => reject(e),
    });
  });
};
export default send;
