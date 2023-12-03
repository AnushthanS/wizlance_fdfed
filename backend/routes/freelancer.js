const express = require('express');
const FreelancerController = require("../controllers/freelancer");

const router = express.Router();

router.post("/api/addGigs", FreelancerController.addGigs);
router.get("/api/uploadGigs", (req, res) => {
    res.render("pages/seller-form");
});

module.exports = router;