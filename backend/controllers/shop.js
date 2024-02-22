const Categories = require("../models/category");
const SubCategories = require("../models/subcategory")
const Gig = require("../models/gig");
const User = require("../models/user");
const Order = require("../models/order");

exports.getSubCategory = async (req, res, next) => {
  const subCategoryId = req.body.subCategoryId;
  const subCategory = await SubCategories.findById(subCategoryId);
  res.status(200).json({
    subCategory,
  });
};

exports.getCategoryImg = async (req, res, next) => {
  const categoryId = req.body.categoryId;
  const category = await Categories.findById(categoryId);
  res.status(200).json({
    category,
  });
};

exports.getCategories = async (req, res, next) => {
  const categories = await Categories.find({}, " _id name imageUrl");
  res.status(200).json({
    categories,
  });
};

exports.getSubCategories = async (req, res, next) => {
  const category = req.body.categoryId;

  try {
    const subCategories = await SubCategories.find({ categoryId: category });
    if (!subCategories) {
      const err = new Error("No subcategories found");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({
      subCategories,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getGigs = async (req, res, next) => {
  const subCategoryId = req.body.subCategoryId;

  try {
    const gigs = await Gig.find({ subCategoryId });
    if (!gigs) {
      const err = new Error("No gigs found");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({
      gigs,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getGigDetails = async (req, res, next) => {
  const gigId = req.body.gigId;

  try {
    const gig = await Gig.findById(gigId);
    if (!gig) {
      const err = new Error("No gig found");
      err.statusCode = 404;
      throw err;
    }
    res.status(200).json({
      gig,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.placeOrder = async (req, res) => {
  const { gigId, freelancerId, details } = req.body;

  try {
    const order = new Order({
      client: req.userId,
      freelancer: freelancerId,
      gig: gigId,
      details,
    });

    const result = await order.save();

    res.status(201).json({
      message: "Order created successfully",
      orderId: result._id.toString(),
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
