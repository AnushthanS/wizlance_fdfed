const Categories = require("../models/category");
const SubCategories = require("../models/subcategory")
const Gig = require("../models/gig");
const User = require("../models/user");
const Orders = require("../models/orders");

exports.getCategories = async (req, res, next) => {
  const categories = await Categories.find({}, " _id name imageUrl");
  res.status(200).json({
    categories,
  });
};

exports.getSubCategories = async (req, res, next) => {
  const category = req.body.categoryId;

  try {
    const subCategories = await SubCategories.find({category});
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
  const subcategory = req.body.subcategoryId;

  try {
    const gigs = await Gig.find({subcategory});
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
}

// upgrade remaining
exports.getPayment = (req, res, next) => {
  const gigName = req.params.gig;
  res.render("pages/Payment", { gigName });
};

exports.orderplaced = (req, res) => {
  const findGig = req.body.gigs;
  const projectRequirements = req.body.projectRequest;

  Gig.findOne({ name: findGig })
    .then((OrderGig) => {
      const orderSaved = new Orders({
        userEmail: req.session.user.email,
        gigId: OrderGig._id,
        projectRequest: projectRequirements,
      });

      orderSaved.save();
      res.redirect("/mainpage");
    })
    .catch((err) => {
      console.log(err);
    });
};
