const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  isFreelancer: Boolean,
  isAdmin: Boolean,
  freelancerSkills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
  freelancerRating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
