const express = require("express");
const adminController = require("../controllers/admin");
const ajaxController = require("../controllers/ajax");
const cacheData = require("../middleware/redisCacheData");

const router = express.Router();

router.get("/api/admin-dashboard", adminController.getDashboard);
router.get("/api/admin-users", adminController.displayUsers);
router.get("/api/admin-categories", cacheData, adminController.displayCategories);
router.get("/api/admin-subcategories", cacheData, adminController.displaySubCategories);
router.post("/api/admin-gigs", adminController.displayGigs);
// router.get("/api/admin-messages", adminController.displayMessages);

router.post("/api/admin-delete", adminController.deleteFromUser);
router.post("/api/admin-delete-gig", adminController.deleteGig);
router.post("/api/admin-add-category", adminController.addCategory);
router.post("/api/admin-add-subcategory", adminController.addSubCategory);
router.post("/api/admin-delete-category", adminController.deleteCategory);
router.post("/api/admin-delete-subcategory", adminController.deleteSubCategory);
// router.post("/api/contact-admin", adminController.contactAdmin);

router.post("/api/sendMail", adminController.postMail);
router.get("/api/admin-sendMail", adminController.getMailPage);

router.get("/api/search-categories", ajaxController.searchCategories);
router.get("/api/search-users", ajaxController.searchUsers);

module.exports = router;
