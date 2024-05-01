const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");
const cacheData = require("../middleware/redisCacheData");
const router = express.Router();

//api
router.post("/api/subcategory", shopController.getSubCategory);
router.post("/api/category", shopController.getCategoryImg);
router.get("/api/categories", cacheData, shopController.getCategories);
router.post("/api/subcategories", shopController.getSubCategories);
router.post("/api/gigs", shopController.getGigs);
router.post("/api/gig/details", shopController.getGigDetails);
router.post("/api/placeOrder", isAuth, shopController.placeOrder);
router.post("/api/pay", isAuth, shopController.postPay);

module.exports = router;