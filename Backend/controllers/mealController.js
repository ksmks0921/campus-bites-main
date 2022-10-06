import asyncHandler from "express-async-handler";
import Meal from "../models/mealModel.js";
import Joi from "joi";
import Restaurant from "../models/restaurantModel.js";

// @desc    Fetch all meals
// @route   GET /api/meals
// @access  Public
const getMeals = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Meal.countDocuments({ ...keyword });

  const products = await Meal.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate([
      {
        path: "restaurant",
        select: "restaurant university",
        model: Restaurant,
      },
      "modifications",
      "dishes",
      "drinks",
    ]);
  // .populate("restaurant", "restaurant university");

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch all meals by university name
// @route   GET /api/meals/university
// @access  Public
const getMealsByUniversityName = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  
  const university = req.query.university || "University of St Thomas";
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Meal.countDocuments({ ...keyword });
  let filterdProduct = [];
  const products = await Meal.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate([
      {
        path: "restaurant",
        select: "restaurant university",
        model: Restaurant,
      },
      "modifications",
      "dishes",
      "drinks",
    ]);
  // .populate("restaurant", "restaurant university");

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

// @desc    Fetch single meals
// @route   GET /api/meals/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Meal.findById(req.params.id).populate([
    {
      path: "restaurant",
      select: "restaurant",
      model: Restaurant,
    },
    "modifications",
    "dishes",
    "drinks",
  ]);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});

// @desc    Fetch all meals by restaurant d
// @route   GET /api/meals/:id/restaurant
// @access  Public
const getProductByRestaurantId = asyncHandler(async (req, res) => {
  
  const product = await Meal.find({ restaurant: req.params.id }).populate([
    {
      path: "restaurant",
      select: "restaurant",
      model: Restaurant,
    },
    "modifications",
    "dishes",
    "drinks",
  ]);
  // .populate(
  //   "restaurant",
  //   "restaurant"
  // );

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});

// @desc    Delete a meals
// @route   DELETE /api/meals/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Meal.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request
  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      await product.remove();
      res.json({ message: "Meal removed" });
    } else {
      res.status(403);
      throw new Error("You can't update Meal created by another restaurant");
    }
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});

// @desc    Create a meals
// @route   POST /api/meals
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    // restaurant: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    productImages: Joi.array().required(),
    modifications: Joi.array(),
    dishes: Joi.array(),
    drinks: Joi.array(),
  });

  const { error, value } = schema.validate(req?.body);
  if (error) {
    return res.status(400).json({
      "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
    });
    // throw new Error('Req body require')
  }
  const {
    name,
    price,
    restaurant,
    description,
    productImages = [],
    modifications = [],
    dishes = [],
    drinks = [],
  } = req.body;
  const meal = new Meal({
    name: name,
    price: price,
    restaurant: req.user._id,
    description: description,
    productImages: productImages,
    modifications: modifications,
    dishes: dishes,
    drinks: drinks,
  });

  let createdMeal = await meal.save();
  createdMeal = await createdMeal
    .populate([
      {
        path: "restaurant",
        select: "restaurant",
        model: Restaurant,
      },
      "modifications",
      "dishes",
      "drinks",
    ])
    .execPopulate();
  res.status(201).json(createdMeal);
});

// @desc    Update a meals
// @route   PUT /api/meals/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    restaurant,
    description,
    image,
    productImages = [],
  } = req.body;

  const product = await Meal.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request
  const schema = Joi.object({
    name: Joi.string(),
    // restaurant: Joi.string().required(),
    price: Joi.number(),
    description: Joi.string(),
    productImages: Joi.array(),
    modifications: Joi.array(),
    dishes: Joi.array(),
    drinks: Joi.array(),
  });

  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      const { error, value } = schema.validate(req?.body);
      if (error) {
        return res.status(400).json({
          "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
        });
        // throw new Error('Req body require')
      }
      product.name = name ? name : product.name;
      product.price = price ? price : product.price;
      product.description = description ? description : product.description;
      // product.image = image
      product.restaurant = req.user._id;
      product.productImages = productImages
        ? productImages
        : product.productImages;
      product.modifications = req?.body?.modifications
        ? req?.body?.modifications
        : product.modifications;
      product.drinks = req?.body?.drinks ? req?.body?.drinks : product.drinks;
      product.dishes = req?.body?.dishes ? req?.body?.dishes : product.dishes;

      let updatedProduct = await product.save();
      updatedProduct = await updatedProduct
        .populate([
          {
            path: "restaurant",
            select: "restaurant",
            model: Restaurant,
          },
          "modifications",
          "dishes",
          "drinks",
        ])
        .execPopulate();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("You can't update Meal created by another restaurant");
    }
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});




// @desc    Update a meal modifications
// @route   PUT /api/meals/:id/modifications
// @access  Private/Admin
const updateMealModification = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    productImages,
    modifications = [],
  } = req.body;
  const schema = Joi.object({
    name: Joi.string(),
    // restaurant: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    productImages: Joi.array(),
    modifications: Joi.array(),
    dishes: Joi.array(),
    drinks: Joi.array(),
  });
  const product = await Meal.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request

  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      const { error, value } = schema.validate(req?.body);
      if (error) {
        return res.status(400).json({
          "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
        });
        // throw new Error('Req body require')
      }
      product.name = name ? name : product.name;
      product.price = price ? price : product.price;
      product.description = description ? description : product.description;
      // product.image = image
      product.restaurant = req.user._id;
      product.productImages = productImages
        ? productImages
        : product.productImages;
      product.modifications = modifications;
      product.dishes = req?.body?.dishes ? req?.body?.dishes : product.dishes;
      product.drinks = req?.body?.drinks ? req?.body?.drinks : product.drinks;

      let updatedProduct = await product.save();
      updatedProduct = await updatedProduct
        .populate([
          {
            path: "restaurant",
            select: "restaurant",
            model: Restaurant,
          },
          "modifications",
          "dishes",
          "drinks",
        ])
        .execPopulate();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("You can't update Meal created by another restaurant");
    }
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});

// @desc    Update a meal dishes
// @route   PUT /api/meals/:id/dishes
// @access  Private/Admin
const updateMealDishes = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    productImages,
    dishes = [],
  } = req.body;
  const schema = Joi.object({
    name: Joi.string(),
    // restaurant: Joi.string().required(),
    price: Joi.number(),
    description: Joi.string(),
    productImages: Joi.array(),
    modifications: Joi.array(),
    dishes: Joi.array(),
    drinks: Joi.array(),
  });
  const product = await Meal.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request

  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      const { error, value } = schema.validate(req?.body);
      if (error) {
        return res.status(400).json({
          "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
        });
        // throw new Error('Req body require')
      }
      product.name = name ? name : product.name;
      product.price = price ? price : product.price;
      product.description = description ? description : product.description;
      // product.image = image
      product.restaurant = req.user._id;
      product.productImages = productImages
        ? productImages
        : product.productImages;
      product.modifications = req?.body?.modifications
        ? req?.body?.modifications
        : product.modifications;
      product.dishes = dishes;
      product.drinks = req?.body?.drinks ? req?.body?.drinks : product.drinks;

      let updatedProduct = await product.save();
      updatedProduct = await updatedProduct
        .populate([
          {
            path: "restaurant",
            select: "restaurant",
            model: Restaurant,
          },
          "modifications",
          "dishes",
          "drinks",
        ])
        .execPopulate();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("You can't update Meal created by another restaurant");
    }
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});

// @desc    Update a meal drinks
// @route   PUT /api/meals/:id/drinks
// @access  Private/Admin
const updateMealDrinks = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    productImages,
    drinks = [],
  } = req.body;
  const schema = Joi.object({
    name: Joi.string(),
    // restaurant: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    productImages: Joi.array(),
    modifications: Joi.array(),
    dishes: Joi.array(),
    drinks: Joi.array(),
  });
  const product = await Meal.findById(req.params.id).populate(
    "restaurant",
    "restaurant"
  );
  // check if product exist and the user that created the product is the one making request

  if (product) {
    if (product.restaurant._id.toString() === req.user._id.toString()) {
      const { error, value } = schema.validate(req?.body);
      if (error) {
        return res.status(400).json({
          "failure message": `This request is failed, bc ${error?.details[0]?.message}`,
        });
        // throw new Error('Req body require')
      }
      product.name = name ? name : product.name;
      product.price = price ? price : product.price;
      product.description = description ? description : product.description;
      // product.image = image
      product.restaurant = req.user._id;
      product.productImages = productImages
        ? productImages
        : product.productImages;
      product.modifications = req?.body?.modifications
        ? req?.body?.modifications
        : product.modifications;
      product.drinks = drinks;
      product.dishes = req?.body?.dishes ? req?.body?.dishes : product.dishes;

      let updatedProduct = await product.save();
      updatedProduct = await updatedProduct
        .populate([
          {
            path: "restaurant",
            select: "restaurant",
            model: Restaurant,
          },
          "modifications",
          "dishes",
          "drinks",
        ])
        .execPopulate();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("You can't update Meal created by another restaurant");
    }
  } else {
    res.status(404);
    throw new Error("Meal not found");
  }
});
export {
  getMeals,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductByRestaurantId,
  getMealsByUniversityName,
  updateMealModification,
  updateMealDishes,
  updateMealDrinks,
};

