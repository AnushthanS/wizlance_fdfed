const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

//api
router.get("/api/categories", shopController.getCategories);
router.post("/api/subcategories", shopController.getSubCategories);
router.post("/api/gigs", shopController.getGigs);
router.post("/api/gig/details", shopController.getGigDetails);

router.get("/api/:pages/:categories/:gig", shopController.getGigs);
router.get("/api/:pages/:categories/:gig/payment", shopController.getPayment);
router.post("/api/place-order", shopController.orderplaced);

module.exports = router;