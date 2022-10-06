import mongoose from 'mongoose'


const modificationSchema = mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Restaurant',
    },
    modification: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
)

const Modification = mongoose.model('Modification', modificationSchema)

export default Modification
