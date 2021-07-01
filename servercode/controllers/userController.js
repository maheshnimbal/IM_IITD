const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { name, email, password, mobileNumber } = req.body;

  
  if (mobileNumber.length != 10) throw "Mobile Number is not correct.";

  const userExists = await User.findOne({
    mobileNumber,
  });

  if (userExists) throw "User with same email already exits.";

  const user = new User({
    name,
    email,
    password: sha256(password + process.env.SALT),
    mobileNumber,
  });

  await user.save();

  res.json({
    message: "User [" + name + "] registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { mobileNumber, password } = req.body;
  const user = await User.findOne({
    mobileNumber,
    password: sha256(password + process.env.SALT),
  });

  if (!user) throw "Email and Password did not match.";

  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User logged in successfully!",
    token,
  });
};