import asyncHandler from 'express-async-handler'
import Drink from '../models/drinkModel.js'
import Joi from "joi";


// @desc    Fetch all drinks
// @route   GET /api/drinks
// @access  Public
const getDrinks = asyncHandler(async (req, res) => {
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

  const count = await Drink.countDocuments({ ...keyword })

  const products = await Drink.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1)).populate('restaurant','restaurant university')

   
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch all drinks by university name
// @route   GET /api/drinks/university
// @access  Public
const getDrinksByUniversityName = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  console.log("odogwu malay", req.query)
  const university = req.query.university || "University of St Thomas"
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Drink.countDocuments({ ...keyword })
  let filterdProduct = []
  const products = await Drink.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1)).populate('restaurant','restaurant university')

    if(products.length >0){
      filterdProduct = products?.filter(item => item?.restaurant?.university === university)
    }
  res.json({ products:filterdProduct, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single drink
// @route   GET /api/drinks/:id
// @access  Public
const getDrinkById = asyncHandler(async (req, res) => {
  const product = await Drink.findById(req.params.id).populate('restaurant','restaurant')

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Drink not found')
  }
})

// @desc    Fetch drinks by restaurant
// @route   GET /api/drinks/:id/restaurant
// @access  Public
const getDrinksByRestaurantId = asyncHandler(async (req, res) => {
  console.log("restaurant triggered")
  const product = await Drink.find({restaurant:req.params.id}).populate('restaurant','restaurant')

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Drink not found')
  }
})

// @desc    Delete a drink
// @route   DELETE /api/drinks/:id
// @access  Private/Admin
const deleteDrink = asyncHandler(async (req, res) => {
  const product = await Drink.findById(req.params.id).populate('restaurant','restaurant')
// check if product exist and the user that created the product is the one making request
  if (product) {
    if(product.restaurant._id.toString() === req.user._id.toString()){
      await product.remove()
      res.json({ message: 'Drink removed' })

    }else{
      console.log(product.restaurant, req.user._id)
      res.status(403)
      throw new Error('You can\'t delete Drink created by another restaurant')
    }
  } else {
    res.status(404)
    throw new Error('Drink not found')
  }
})

// @desc    Create a drink
// @route   POST /api/drinks
// @access  Private/Admin
const createDrink = asyncHandler(async (req, res) => {
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
  const drink = new Drink({
    name: name,
    price: price,
    restaurant: req.user._id,
    description: description,
    image:image
  })

  const createdDrink = await drink.save()
  res.status(201).json(createdDrink)
})

// @desc    Update a drink
// @route   PUT /api/drinks/:id
// @access  Private/Admin
const updateDrink = asyncHandler(async (req, res) => {
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

  const product = await Drink.findById(req.params.id).populate('restaurant','restaurant')
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
      throw new Error('You can\'t update Drink created by another restaurant')
    }
  } else {
    res.status(404)
    throw new Error('Drink not found')
  }
})




export {
  getDrinks,
  getDrinkById,
  createDrink,
  updateDrink,
  deleteDrink,
  getDrinksByRestaurantId,
  getDrinksByUniversityName,
}
