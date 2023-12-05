const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gigSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
  freelancer: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Gig", gigSchema);
