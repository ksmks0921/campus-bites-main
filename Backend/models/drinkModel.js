import mongoose from 'mongoose'


const drinkSchema = mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Restaurant',
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
      required: false,
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
  
  },
  {
    timestamps: true,
  }
)

const Drink = mongoose.model('Drink', drinkSchema)

export default Drink
