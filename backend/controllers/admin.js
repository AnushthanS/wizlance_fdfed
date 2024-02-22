const User = require("../models/user");
const Category = require("../models/category");
const Gig = require("../models/gig");
// const Messages = require("../models/messages");

const nodemailer = require("nodemailer");

// exports.displayUsers = (req, res) => {
//   User.find({}, { password: 0 }).then((users) => {
//     return res.render("pages/display-details", { users });
//   });
// };

// user api
exports.displayUsers = async (req, res) => {
    const users = await  User.find({}, { password: 0 });
    res.status(200).json({
      users,
    });
};


// repeated api
exports.displayCategories = (req, res) => {
  Category.find({}).then((categories) => {
    return res.render("pages/display-categories", { categories });
  });
};


exports.displayGigs = async (req, res) => {
  const gig = await Gig.find({})
   res.status(200).json({
    gig
  });
};


exports.deleteFromUser = (req, res) => {
  const requiredMail = req.body.deleteFromEmail;
  User.findOneAndRemove({ email: requiredMail }).then((user) => {
    if (user.isFreelancer) {
      Gig.deleteMany({ freelancerEmail: user.email }).then();
    }
    return res.redirect("/admin-users");
  });
};

exports.addCategory = (req, res) => {
  const newCategory = req.body.addCategory;
  const image = req.body.addCategoryImage;
  const catObj = new Category({
    name: newCategory,
    imageUrl: image,
  });
  catObj.save();

  setTimeout(() => {
    return res.redirect("/admin-categories");
  }, 50);
};

exports.addSubCategory = (req, res) => {
  const requiredCategory = req.body.selectCategory;
  const image = req.body.addSubCategoryImage;

  const newSubCategory = {
    name: req.body.addSubCategory,
    imageUrl: image,
  };

  Category.findOneAndUpdate(
    { name: requiredCategory.toString() },
    { $push: { subCategories: newSubCategory } }
  ).then(() => {
    return res.redirect("/admin-categories");
  });
};

exports.deleteCategory = (req, res) => {
  const categoryChosen = req.body.selectedCategory;

  Category.deleteOne({ name: categoryChosen }).then(() => {
    return res.redirect("/admin-categories");
  });
};

exports.deleteSubCategory = (req, res) => {
  const categoryChosen = req.body.selectedCategory;
  const subCategoryChosen = req.body.deleteSubCategory;

  Category.findOneAndUpdate(
    { name: categoryChosen.toString() },
    { $pull: { subCategories: { name: subCategoryChosen } } }
  ).then(() => {
    return res.redirect("/admin-categories");
  });
};

exports.getDashboard = (req, res, next) => {
  res.render("pages/admin-dashboard", { admin: req.session.user });

};

// exports.contactAdmin = (req, res) => {
//   const nameReq = req.body.name;
//   const emailReq = req.body.email;
//   const messageSent = req.body.message;

//   const newMessage = new Messages({
//     name: nameReq,
//     email: emailReq,
//     message: messageSent,
//   });

//   newMessage.save();
//   return res.redirect("/contact");
// };

exports.postMail = (req, res, next) => {
  const subject = req.body.mailSubject;
  const message = req.body.mailMessage;
  console.log(subject, message);

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wiz.project13@gmail.com",
      pass: "cxtdpaqbbnacvtft",
    },
  });

  User.find({}, { email: 1 })
    .then((emails) => {
      return emails.forEach((e) => {
        const mailOptions = {
          to: e.email,
          form: "wiz.project13@gmail.com",
          subject: subject,
          html: message,
        };

        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(500).send(error.toString());
          }
          res.status(200).send("Email sent: " + info.response);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
exports.getMailPage = (req, res, next) => {
  res.render("pages/admin-sendMail");
};