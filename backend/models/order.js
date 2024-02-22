const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  freelancer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  gigId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Gig",
  },
  details: {
    type: String,
  },
  status: {
    // Pending, Accepted, Rejected, Completed
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
