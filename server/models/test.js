import User from "./User.js";
(async () => {
  /*  let x = new User({password: "hello"});
  await x.save()*/
  console.log(await User.deleteMany({}));
})();
