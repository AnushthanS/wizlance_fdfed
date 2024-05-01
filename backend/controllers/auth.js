const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    console.log("Email = ", email);

    try {
        if (!errors.isEmpty()) {
            const err = new Error("Validation failed");
            err.statusCode = 422;
            err.data = errors.array();
            throw err;
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const result = await user.save();

        res.status(201).json({
            message: "User signed up successfully",
            userId: result._id.toString(),
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    

    try {
        const user = await User.findOne({ email });
        if (!user) {
            const err = new Error("No user with this email exists");
            console.log("No user with this email exists");
            err.statusCode = 401;
            throw err;
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            const err = new Error("Incorrect password");
            console.log("Incorrect password");
            err.statusCode = 401;
            throw err;
        }
        const token = jwt.sign(
            {
                userId: user._id,
                firstName: user.firstName,
            },
            "wizlance",
            { expiresIn: "7d" }
        );

        console.log(user.firstName);

        res.status(200).json({
            token,
            user,
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// exports.getLogin = (req, res, next) => {
//   let message = req.flash("error");
//   message = message.length > 0 ? message[0] : null;
//   res.render("pages/login", {
//     errorMessage: message,
//   });
// };

// exports.postLogin = (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   User.findOne({ email })
//     .then((user) => {
//       console.log(user);
//       if (!user) {
//         req.flash("error", "Invalid email or password");
//         return res.redirect("/login");
//       }
//       bcrypt.compare(password, user.password).then((doMatch) => {
//         if (doMatch) {
//           req.session.isLoggedIn = true;
//           req.session.user = user;
//           return req.session.save((err) => {
//             if (err) throw err;
//             res.redirect("/mainpage");
//           });
//         }
//         req.flash("error", "Invalid email or password");
//         return res.redirect("/login");
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// exports.getSignup = (req, res, next) => {
//   let message = req.flash("error");
//   message = message.length > 0 ? message[0] : null;
//   res.render("pages/signup", {
//     errorMessage: message,
//   });
// };

// exports.postSignup = (req, res, next) => {
//   let firstName = req.body.firstname;
//   let lastName = req.body.lastname;
//   let email = req.body.email;
//   let password = req.body.password;

//   User.findOne({ email })
//     .then((user) => {
//       if (user) {
//         req.flash("error", "Account already exists");
//         return res.redirect("/signup");
//       }
//       bcrypt
//         .hash(password, 12)
//         .then((hashedPassword) => {
//           const user = new User({
//             firstName,
//             lastName,
//             email,
//             password: hashedPassword,
//           });
//           return user.save();
//         })
//         .then(() => {
//           res.redirect("/login");
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
