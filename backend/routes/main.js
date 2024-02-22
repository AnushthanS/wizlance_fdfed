const express = require("express");

const dashboardController = require("../controllers/dashboard");
const otherFuncController = require("../controllers/otherFunc");

const router = express.Router();

// router.get("/api/dashboard", dashboardController.getDashboard);
router.get("/api/seller-overview", dashboardController.getSellerForm);
router.post("/api/signupFreelancer", dashboardController.postSignupFreelancer);

router.post("/api/search", otherFuncController.postSearchCategories);
router.post(
  "/api/:category/search-gig",
  otherFuncController.postSearchSubCategories
);

router.get("/api/contact", otherFuncController.getContactForm);

module.exports = router;
