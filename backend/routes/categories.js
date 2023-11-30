const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

//api
router.get("/categories", shopController.getCategories);
router.get("/subcategories", shopController.getSubCategories);

router.get("/:pages/:categories/:gig", shopController.getGigs);
router.get("/:pages/:categories/:gig/payment", shopController.getPayment);
router.post("/place-order", shopController.orderplaced);

module.exports = router;