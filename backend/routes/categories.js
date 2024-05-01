const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");
const cacheData = require("../middleware/redisCacheData");
const router = express.Router();

//api
router.post("/api/subcategory", cacheData, shopController.getSubCategory);
router.post("/api/category", cacheData, shopController.getCategoryImg);
router.get("/api/categories", cacheData, shopController.getCategories);
router.post("/api/subcategories", cacheData, shopController.getSubCategories);
router.post("/api/gigs", cacheData, shopController.getGigs);
router.post("/api/gig/details", cacheData, shopController.getGigDetails);
router.post("/api/placeOrder", isAuth, shopController.placeOrder);
router.post("/api/pay", isAuth, shopController.postPay);
router.get("/api/clearCache", shopController.clearCache);
router.get("/api/cache", shopController.getCacheData);

module.exports = router;
