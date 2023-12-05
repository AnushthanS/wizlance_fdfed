const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  gigs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gig",
    },
  ],
});

module.exports = mongoose.model(
  "SubCategory",
  subCategorySchema,
  "SubCategories"
);
