var nodeoutlook = require("nodejs-nodemailer-outlook");
nodeoutlook.sendEmail({
  auth: {
    user: "softtune1@hotmail.com",
    pass: "tp07089314662",
  },
  from: "softtune1@hotmail.com",
  to: "saheedaliamin59@gmail.com",
  subject: "Hey you, awesome!",
  html: "<b>This is bold text</b>",
  text: "This is text version!",
  onSuccess: (e) => console.log(e),
  onError: (e) => console.log(e),
}); //.then(console.log).catch(console.log)
