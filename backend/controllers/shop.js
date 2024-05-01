const Categories = require("../models/category");
const SubCategories = require("../models/subcategory");
const Gig = require("../models/gig");
const User = require("../models/user");
const Order = require("../models/order");
const client = require("../Redis/client");

exports.getSubCategory = async (req, res, next) => {
  const subCategoryId = req.body.subCategoryId;
  const subCategory = await SubCategories.findById(subCategoryId);

  const key = req.originalUrl;
  // Seting the data to Redis
  await client.set(key, JSON.stringify(subCategory));
  console.log(key, "\nFetching from Database");

  res.status(200).json({
    subCategory,
  });
};

exports.getCategoryImg = async (req, res, next) => {
  const categoryId = req.body.categoryId;
  const category = await Categories.findById(categoryId);

  const key = req.originalUrl;
  // Seting the data to Redis
  await client.set(key, JSON.stringify(category));
  console.log(key, "\nFetching from Database");

  res.status(200).json({
    category,
  });
};

exports.getCategories = async (req, res, next) => {
  const categories = await Categories.find({}, " _id name imageUrl");

  const key = req.originalUrl;
  // Seting the data to Redis
  await client.set(key, JSON.stringify(categories));
  console.log(key, "\nFetching from Database");
  // client.del("/api/subcategories")
  res.status(200).json({
    categories,
  });
};

exports.getSubCategories = async (req, res, next) => {
  const category = req.body.categoryId;

  const key = req.originalUrl;

  try {
    const subCategories = await SubCategories.find({ categoryId: category });
    if (!subCategories) {
      const err = new Error("No subcategories found");
      err.statusCode = 404;
      throw err;
    }
    await client.set(key, JSON.stringify(subCategories));
    console.log(key, "\nFetching from Database");
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

  const key = req.originalUrl;

  try {
    const gigs = await Gig.find({ subCategoryId });
    if (!gigs) {
      const err = new Error("No gigs found");
      err.statusCode = 404;
      throw err;
    }
    // Seting the data to Redis
    await client.set(key, JSON.stringify(gigs));
    console.log(key, "\nFetching from Database");
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

  const key = req.originalUrl;

  try {
    const gig = await Gig.findById(gigId).populate([
      "freelancer",
      "subCategoryId",
    ]);
    if (!gig) {
      const err = new Error("No gig found");
      err.statusCode = 404;
      throw err;
    }
    // Seting the data to Redis
    await client.set(key, JSON.stringify(gig));
    console.log(key, "\nFetching from Database");
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

exports.postPay = async (req, res) => {
  const orderId = req.body.orderId;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      const error = new Error("No order found");
      error.statusCode = 404;
      throw error;
    }

    order.paymentStatus = true;
    await order.save();

    res.status(200).json({
      message: "Order paid successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.clearCache = async (req, res) => {
  try {
    await client.flushAll();
    res.status(200).json({
      message: "Cache cleared successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getCacheData = async (req, res) => {
  try {
    const keys = await client.keys("*");
    const cacheData = [];
    for (const key of keys) {
      const data = await client.get(key);
      cacheData.push({ key, data });
    }
    res.status(200).json({
      cacheData,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
