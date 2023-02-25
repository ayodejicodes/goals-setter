const asyncHandler = require("express-async-handler");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc        Registers a user
// route        POST /api/users
// access       Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(200).json({
      id: user._id,
      name,
      email,

      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User!");
  }
});

// @desc        Authenticates a user
// route        POST /api/users/login
// access       Public
const logInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide both Email and Password");
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("You do not have an Account, you need to register!");
  }

  const compareHashedPassword = await bcrypt.compare(password, user.password);

  if (user && compareHashedPassword) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

// @desc        Get a single user
// route        GET /api/users/me
// access       Private
const getMe = asyncHandler(async (req, res) => {
  // const user = await UserModel.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // const { _id, name, email } = user;

  // res.status(200).json({
  //   id: _id,
  //   name,
  //   email,
  // });

  res.status(200).json(req.user);
});

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
  return token;
};

module.exports = { registerUser, logInUser, getMe };
