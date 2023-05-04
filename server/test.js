import User from "./models/Song.js";
(async () => {
  /*  let x = new User({password: "hello"});
  await x.save()*/
  console.log(await User.findOne({}));
})();
