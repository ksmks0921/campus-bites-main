import asyncHandler from "express-async-handler";
import Modification from "../models/modificationModel.js";
import Joi from "joi";

// @desc    Fetch all modifications
// @route   GET /api/modifications
// @access  Public
const getModifications = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        modification: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Modification.countDocuments({ ...keyword });

  const products = await Modification.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate("restaurant", "restaurant university");

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch all modifications by university name
// @route   GET /api/modifications/university
// @access  Public
const getModificationsByUniversityName = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const university = req.query.university || "University of St Thomas";
  const keyword = req.query.keyword
    ? {
        modification: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Modification.countDocuments({ ...keyword });
  let filterdProduct = [];
  const products = await Modification.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate("restaurant", "restaurant university");

  if (products.length > 0) {
    filterdProduct = products?.filter(
      (item) => item?.restaurant?.university === university
    );
  }
  res.json({
    products: filterdProduct,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

// @desc    Fetch single modification
// @route   GET /api/modifications/:id
// @access  Public
const getModificationById = asyncHandler(async (req, res) => {
  const product = await Modification.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Modification not found");
  }
});

// @desc    Fetch single modification
// @route   GET /api/modifications/:id/restaurant
// @access  Public
const getModificationsByRestaurantId = asyncHandler(async (req, res) => {
  const product = await Modification.find({
    restaurant: req.params.id,
  }).populate("restaurant", "restaurant");

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Modification not found");
  }
});
// @desc    Delete a modification
// @route   DELETE /api/modifications/:id
// @access  Private/Admin
const deleteModification = asyncHandler(async (req, res) => {
  const product = await Modification.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request
  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      await product.remove();
      res.json({ message: "Modification removed" });
    } else {
      console.log(product.restaurant, req.user._id);
      res.status(403);
      throw new Error(
        "You can't delete Modification created by another restaurant"
      );
    }
  } else {
    res.status(404);
    throw new Error("Modification not found");
  }
});

// @desc    Create a modification
// @route   POST /api/modifications
// @access  Private/Admin
const createModification = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    modification: Joi.string().required(),
    price: Joi.number(),
    description: Joi.string(),
  });

  const { error, value } = schema.validate(req?.body);
  if (error) {
    return res
      .status(400)
      .json({
        "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
      });
    // throw new Error('Req body require')
  }
  const { modification, price = 0,  description = "" } = req.body;
  const drink = new Modification({
    modification: modification,
    price: price,
    restaurant: req.user._id,
    description: description,
  });

  const createdDrink = await drink.save();
  res.status(201).json(createdDrink);
});

// @desc    Update a modification
// @route   PUT /api/modifications/:id
// @access  Private/Admin
const updateModification = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    modification: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string(),
  });

  const { error, value } = schema.validate(req?.body);
  if (error) {
    return res
      .status(400)
      .json({
        "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
      });
    // throw new Error('Req body require')
  }
  const {
    modification,
    price =0,
    restaurant,
    description ="",
  } = req.body;

  const product = await Modification.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request

  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      product.modification = modification;
      product.price = price;
      product.description = description;
      product.restaurant = req.user._id;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error(
        "You can't update Modification created by another restaurant"
      );
    }
  } else {
    res.status(404);
    throw new Error("Modification not found");
  }
});




export {
  getModifications,
  getModificationById,
  createModification,
  updateModification,
  deleteModification,
  getModificationsByRestaurantId,
  getModificationsByUniversityName,
};
