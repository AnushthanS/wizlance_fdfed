const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const reviewSchema = new Schema({
  rating: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
  },
  gig: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Gig",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
