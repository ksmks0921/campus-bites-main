import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const imageSchema = mongoose.Schema(
  {
    src: { type: String, required: true },
    // rating: { type: Number, required: true },
    // comment: { type: String, required: true },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
  },
  {
    timestamps: true,
  }
);

const mealSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurant",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: true,
      default: "Available",
    },
    productImages: [{ type: String }],
    modifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Modification",
      },
    ],
    dishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Dish",
      },
    ],
    drinks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Drink",
      },
    ],
    // brand: {
    //   type: String,
    //   required: true,
    // },

    // category: {
    //   type: String,
    //   required: true,
    // },
    // reviews: [reviewSchema],
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // countInStock: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Meal", mealSchema);

export default Product;
