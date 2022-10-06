import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Joi from "joi";
import url from 'url';

function fullUrl(req) {
  return url.format({
    // protocol: req.protocol,
    host: req.get('host'),
    // pathname: req.originalUrl
  });
}
// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(req?.body);
  if (error) {
    res.status(401);
    throw new Error("Email and password is required");
    // throw new Error('Req body require')
  }
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      university:user.university,
      // isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    year: Joi.string().valid('Freshman', 'Sophomore',"Junior","Senior").required(),
    university: Joi.string().valid('University of St Thomas', 'University of Minnesota').required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    phoneNumber:Joi.string().required(),
    idImage:Joi.string().required()
  });
  const { error, value } = schema.validate(req?.body);
  if (error) {
    res.status(401);
    throw new Error("Missing parameters");
    // throw new Error('Req body require')
  }
  const {
    name,
    email,
    password,
    confirmPassword,
    phoneNumber,
    year,
    university,
    idImage
  } = req.body;
  let passwordMatch = password === confirmPassword;
  if (passwordMatch === false) {
    return res.status(400).json({ msg: "password doesn't match" });

    // res.status(400)
    // throw new Error('Password doesn\'t match')
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
    year,
    university,
    idImage
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.email,
      year: user.year,
      university: user.university,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});





// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});



export {
  authUser,
  registerUser,
  getUserById,
  getUsers,
  deleteUser
};
