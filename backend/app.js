require("dotenv").config();
// const path = require("path");
// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require('cors');

// const mainRoutes = require("./routes/main");
// const authRoutes = require("./routes/auth");
// const categoryRoutes = require("./routes/categories");
// const adminRoutes = require("./routes/admin");
// const freelancerRoutes = require("./routes/freelancer");

// const app = express();
// app.use(cors());

// const MONGODB_URI = process.env.MONGODB_URI;

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// app.use(express.json());

// app.use(multer({ storage: fileStorage, fileFilter }).single("image"));
// app.use("/images", express.static(path.join(__dirname, "images")));


// // app.use((req, res, next) => {
// //   if (req.session.user) {
// //     const fname = req.session.user.firstName;
// //     const letter = fname.slice(0, 1);
// //     res.locals.profileLogo = letter;
// //   }
// //   res.locals.loggedIn = req.session.isLoggedIn;
// //   next();
// // });

// app.use(mainRoutes);
// app.use(authRoutes);
// app.use(categoryRoutes);
// app.use(adminRoutes);
// app.use(freelancerRoutes);

// app.use((error, req, res, next) => {
//   const status = error?.statusCode
//   const message = error.message
//   const data = error?.data;
//   res.status(status).json({message, data})
// })

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("Server listening at 3000");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });


const express = require('express');
const fs = require('fs');
const path = require('path');
// const mongoose = require('mongoose');
const morgan = require('morgan');
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require('cors');

const mainRoutes = require("./routes/main");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/categories");
const adminRoutes = require("./routes/admin");
const freelancerRoutes = require("./routes/freelancer");


const app = express();

app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI;

// Create a 'WebLogs' directory if it doesn't exist
const logsDir = path.join(__dirname, 'WebLogs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create a write stream for logging
const accessLogStream = fs.createWriteStream(
  path.join(logsDir, `${new Date().toISOString().slice(0, 10)}.log`),
  { flags: 'a' }
);

// Setup Morgan logging
app.use(morgan('combined', { stream: accessLogStream }));



const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


app.use(express.json());

app.use(multer({ storage: fileStorage, fileFilter }).single("image"));
app.use("/images", express.static(path.join(__dirname, "images")));


// app.use((req, res, next) => {
//   if (req.session.user) {
//     const fname = req.session.user.firstName;
//     const letter = fname.slice(0, 1);
//     res.locals.profileLogo = letter;
//   }
//   res.locals.loggedIn = req.session.isLoggedIn;
//   next();
// });

app.use(mainRoutes);
app.use(authRoutes);
app.use(categoryRoutes);
app.use(adminRoutes);
app.use(freelancerRoutes);


app.use((error, req, res, next) => {
  const status = error?.statusCode || 500;
  const message = error.message || 'An error occurred';
  const data = error.data || null;
  console.log("Debug: ",data, message, status)
  res.status(status).json({ message, data });
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server listening at 3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
// Path: wizlance_fdfed/backend/app.js