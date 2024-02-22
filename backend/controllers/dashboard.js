const User = require("../models/user");
const Order = require("../models/order");

exports.getOrders = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    let orders;
    if (user.isFreelancer) {
      orders = await Order.find({ freelancer: req.userId }).populate(["gig", "client"]);
    } else {
      orders = await Order.find({ client: req.userId }).populate(["gig", "freelancer"]);
    }
    res.status(200).json({ orders: orders });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// exports.getDashboard = async (req, res, next) => {
//   try {
//     const gig = await Gig.find({ freelancerEmail: req.session.user.email });
//     const fgigs = gig.map((orr) => orr);
//     console.log(fgigs);

//     const salesPromises = fgigs.map((fgig) => {
//       return Orders.find({ gigId: fgig._id });
//     });

//     const salesResults = await Promise.all(salesPromises);

//     const sales = [];
//     const sale_gig = [];

//     salesResults.forEach((saleList) => {
//       saleList.forEach((s) => {
//         sales.push(s);
//       });
//     });

//     for (const sale of sales) {
//       const gig = await Gig.findOne({ _id: sale.gigId });
//       sale_gig.push(gig);
//     }

//     const orders = await Orders.find({ userEmail: req.session.user.email });

//     const gigPromises = orders.map((order) => {
//       return Gig.findOne({ _id: order.gigId });
//     });

//     const gigs = await Promise.all(gigPromises);

//     console.log("USER");
//     console.log(req.session.user);
//     res.render("pages/dashboard", {
//       user: req.session.user,
//       orders,
//       gigs,
//       fgigs,
//       sales,
//       sale_gig,
//     });
//   } catch (error) {
//     console.log("Dashboard ERR");
//     console.log(error);
//   }
// };

// exports.postSignupFreelancer = (req, res, next) => {
//   const skills = req.body.skills;
//   const arr = skills.split(",");
//   req.session.user.isFreelancer = true;
//   req.session.user.freelancerSkills = arr;
//   req.session.save();

//   User.findOne({ email: req.session.user.email })
//     .then((user) => {
//       user.isFreelancer = true;
//       user.freelancerSkills = arr;
//       user.save().then(() => {
//         res.redirect("/dashboard");
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


exports.userCheck = async(req, res, next) => {
  const query = req.query.query;
  const users = await User.find({
    firstName: query,
  });
  res.status(200).json({
    users,
  });

};