import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Restaurant from "../models/restaurantModel.js";
import Joi from "joi";
import url from 'url';


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(req?.body);
  if (error) {
    res.status(401);
    throw new Error("username or password is required");
    // throw new Error('Req body require')
  }
  const { username, password } = req.body;

  const user = await Restaurant.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,

      // isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    restaurant:Joi.string().required(),
    university: Joi.string().valid('University of St Thomas', 'University of Minnesota').required(),
    image:Joi.string()
 
  });
  const { error, value } = schema.validate(req?.body);
  if (error) {
    return res.status(400).json({"failure message":`This request is failed, bc ${error?.details[0]?.message}`});
    // throw new Error('Req body require')
  }
  const {
    username,
    password,
    restaurant,
    university,
    image
  } = req.body;
  
  const userExists = await Restaurant.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("Restaurant already exists");
  }

  const user = await Restaurant.create({
    username,
    password,
    restaurant,
    university,
    image
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      restaurant:user.restaurant,
      university:user.university,
      image:user.image,
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
  const users = await Restaurant.find({}).select("restaurant image");
  res.json(users);
});

// @desc    Get all users
// @route   GET /api/users/university
// @access  Private/Admin
const getUsersByUniversity = asyncHandler(async (req, res) => {
  console.log("params", req.query)
  const university = req.query.university || "University of St Thomas"
  const users = await Restaurant.find({university}).select("restaurant image");
  res.json(users);
});

// @desc    Delete restaurant
// @route   DELETE /api/restaurants/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await Restaurant.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "Restaurant removed" });
  } else {
    res.status(404);
    throw new Error("Restaurant not found");
  }
});

// @desc    Get restaurant by ID
// @route   GET /api/restaurants/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await Restaurant.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("Restaurant not found");
  }
});



export {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  getUsersByUniversity
};
