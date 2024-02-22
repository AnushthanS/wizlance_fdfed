const express = require("express");

const dashboardController = require("../controllers/dashboard");
const otherFuncController = require("../controllers/otherFunc");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/api/getOrders", isAuth, dashboardController.getOrders);

router.post("/api/search", otherFuncController.postSearchCategories);
router.post(
  "/api/:category/search-gig",
  otherFuncController.postSearchSubCategories
);
router.get("/api/contact", otherFuncController.getContactForm);

module.exports = router;
