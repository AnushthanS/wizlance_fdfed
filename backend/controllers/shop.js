const Categories = require("../models/category");
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
  const categories = await Categories.find({}, "subCategories");
  res.status(200).json({
    categories,
  });
};

exports.getGigs = (req, res, next) => {
  const category = req.params.pages;
  const subCategory = req.params.categories;
  const gig = req.params.gig;

  Gig.findOne({ name: gig })
    .then((gig) => {
      console.log(gig);
      const freelancerEmail = gig.freelancerEmail;
      const userIsFreelancer = req.session.user.email === freelancerEmail;
      User.findOne({ isFreelancer: true, email: freelancerEmail }).then(
        (freelancer) => {
          res.render("pages/profile-templates", {
            gig,
            freelancer,
            category,
            subCategory,
            userIsFreelancer,
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

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