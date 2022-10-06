import asyncHandler from 'express-async-handler'
import Dish from '../models/dishModel.js'
import Joi from "joi";


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getDishes = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Dish.countDocuments({ ...keyword })

  const products = await Dish.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1)).populate('restaurant','restaurant university')

   
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})
// @desc    Fetch all dishes by university name
// @route   GET /api/dishes/university
// @access  Public
const getDishesByUniversityName = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const university = req.query.university || "University of St Thomas"
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Dish.countDocuments({ ...keyword })
  let filterdProduct = []
  const products = await Dish.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1)).populate('restaurant','restaurant university')

    if(products.length >0){
      filterdProduct = products?.filter(item => item?.restaurant?.university === university)
    }
  res.json({ products:filterdProduct, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single dishes
// @route   GET /api/dishes/:id
// @access  Public
const getDishById = asyncHandler(async (req, res) => {
  const product = await Dish.findById(req.params.id).populate('restaurant','restaurant')

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Dish not found')
  }
})

// @desc    Fetch single Dish
// @route   GET /api/dishes/:id
// @access  Public
const getDishesByRestaurantId = asyncHandler(async (req, res) => {
  console.log("restaurant triggered")
  const product = await Dish.find({restaurant:req.params.id}).populate('restaurant','restaurant')

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Dish not found')
  }
})

// @desc    Delete a Dish
// @route   DELETE /api/dishes/:id
// @access  Private/Admin
const deleteDish = asyncHandler(async (req, res) => {
  const product = await Dish.findById(req.params.id).populate('restaurant','restaurant')
// check if product exist and the user that created the product is the one making request
  if (product) {
    if(product.restaurant._id.toString() === req.user._id.toString()){
      await product.remove()
      res.json({ message: 'Dish removed' })

    }else{
      console.log(product.restaurant, req.user._id)
      res.status(403)
      throw new Error('You can\'t delete Dish created by another restaurant')
    }
  } else {
    res.status(404)
    throw new Error('Dish not found')
  }
})

// @desc    Create a Dish
// @route   POST /api/dishes
// @access  Private/Admin
const createDish = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    description:Joi.string(),
  });

  const { error, value } = schema.validate(req?.body);
  if (error) {
    return res.status(400).json({"failure message":`This request is failed, bc ${error?.details[0]?.message}`});
    // throw new Error('Req body require')
  }
  const {name,price,restaurant,description="", image, productImages=[]} = req.body
  const drink = new Dish({
    name: name,
    price: price,
    restaurant: req.user._id,
    description: description,
    image:image
  })

  const createdDrink = await drink.save()
  res.status(201).json(createdDrink)
})

// @desc    Update a dish
// @route   PUT /api/dishes/:id
// @access  Private/Admin
const updateDish = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    description:Joi.string(),
  });

  const { error, value } = schema.validate(req?.body);
  if (error) {
    return res.status(400).json({"failure message":`This request is failed, bc ${error?.details[0]?.message}`});
    // throw new Error('Req body require')
  }
  const {
    name,price,restaurant,description, image, productImages=[]
  } = req.body

  const product = await Dish.findById(req.params.id).populate('restaurant','restaurant')
// check if product exist and the user that created the product is the one making request

  if (product ) {
    if(product.restaurant._id.toString() === req.user._id.toString()){

      product.name = name
      product.price = price
      product.description = description
      product.image = image
      product.restaurant =  req.user._id
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    }else{
      res.status(404)
      throw new Error('You can\'t update Dish created by another restaurant')
    }
  } else {
    res.status(404)
    throw new Error('Dish not found')
  }
})


export {
  getDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
  getDishesByRestaurantId,
  getDishesByUniversityName,
}
