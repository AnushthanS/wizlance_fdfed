const User = require("../models/user");
const Category = require("../models/category");
const Gig = require("../models/gig");
const SubCategories = require("../models/subcategory");
const client = require("../Redis/client");

const nodemailer = require("nodemailer");
const subcategory = require("../models/subcategory");

// user api
exports.displayUsers = async (req, res) => {
    const users = await User.find({}, { password: 0 });
    res.status(200).json({
        users,
    });
};

exports.deleteGig = async (req, res) => {
    const gigId = req.body.gigId;
    await Gig.findByIdAndRemove(gigId);
    res.status(200).json({
        message: "Gig deleted successfully",
    });
};

exports.searchGigs = async (req, res) => {
    const searchQuery = req.body.searchQuery;
    const gigs = await Gig.find({
        name: { $regex: searchQuery, $options: "i" },
    });
    res.status(200).json({
        gigs,
    });
};

exports.displayCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        console.log("Fetched categories:", categories);

        const key = req.originalUrl;
        // Seting the data to Redis
        await client.set(key, JSON.stringify(categories));

        console.log(key, "\nFetching from Database");

        res.status(200).json({
            categories,
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.displaySubCategories = async (req, res, next) => {
    try {
        const subCategories = await SubCategories.find({});

        const key = req.originalUrl;
        // Seting the data to Redis
        await client.set(key, JSON.stringify(subCategories));
        console.log(key, "\nFetching from Database");

        if (!subCategories) {
            const err = new Error("No subcategories found");
            err.statusCode = 404;
            throw err;
        }

        const subcategories = await Promise.all(
            subCategories.map(async (subCategory) => {
                const category = await Category.findById(
                    subCategory.categoryId
                );
                return {
                    ...subCategory.toObject(),
                    category: category,
                };
            })
        );
        console.log(subcategories);
        res.status(200).json({
            subcategories,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.displayGigs = async (req, res) => {
    const type = req.body.type;
    const id = req.body.id;

 
    let gigs;
    switch (type) {
        case "subcategory":
            gigs = await Gig.find({ subcategoryId: id });
            break;
        case "user":
            gigs = await Gig.find({ freelancer: id });
            break;
        default:
            gigs = await Gig.find({});
    }

    res.status(200).json({
        gigs,
    });
};

exports.allGigs = async (req, res) => {
    const gigs = await Gig.find({})
        .populate({
            path: "subCategoryId",
            select: "name",
        })
        .populate({
            path: "freelancer",
            select: "firstName",
        });
    res.status(200).json({
        gigs,
    });
};

exports.deleteFromUser = (req, res) => {
    const requiredMail = req.body.deleteFromEmail;
    User.findOneAndRemove({ email: requiredMail }).then((user) => {
        if (user?.isFreelancer) {
            Gig.deleteMany({ freelancerEmail: user.email }).then();
        }
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
};
exports.getMailPage = (req, res, next) => {
    res.render("pages/admin-sendMail");
};
