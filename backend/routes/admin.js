const express = require("express");
const adminController = require("../controllers/admin");
const ajaxController = require("../controllers/ajax");
const cacheData = require("../middleware/redisCacheData");

const router = express.Router();



/**
 * @swagger
 * /api/admin-users:
 *   get:
 *     summary: Get all admin users
 *     tags:
 *       - Admin Users
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       username:
 *                         type: string
 *                       email:
 *                         type: string
 *     security:
 *       - session_auth: []
 */
router.get("/api/admin-users", adminController.displayUsers);


/**
 * @swagger
 * /api/admin-categories:
 *   get:
 *     summary: Get all admin categories
 *     tags:
 *       - Admin Categories
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categories:
 *                   type: array
 *     security:
 *       - session_auth: []
 */
router.get("/api/admin-categories", cacheData, adminController.displayCategories);

/**
 * @swagger
 * /api/admin-subcategories:
 *   get:
 *     summary: Get all admin subcategories
 *     tags:
 *       - Admin Subcategories
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 subcategories:
 *                   type: array
 *     security:
 *       - session_auth: []
 */
router.get("/api/admin-subcategories", cacheData, adminController.displaySubCategories);

/**
 * @swagger
 * /api/admin-gigs:
 *   get:
 *     summary: Get all admin gigs
 *     tags:
 *       - Admin Gigs
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 gigs:
 *                   type: array
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-gigs", adminController.displayGigs);


/**
 * @swagger
 * /api/all-gigs:
 *   get:
 *     summary: Get all gigs
 *     tags:
 *       - Admin Gigs
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 gigs:
 *                   type: array
 *     security:
 *       - session_auth: []
 */
router.get("/api/all-gigs", adminController.allGigs);


/**
 * @swagger
 * /api/admin-delete:
 *   post:
 *     summary: Delete user and associated data
 *     tags:
 *       - Admin Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deleteFromEmail:
 *                 type: string
 *                 description: Email of the user to be deleted
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Bad request, user email is required
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-delete", adminController.deleteFromUser);



/**
 * @swagger
 * /api/admin-delete-gig:
 *   post:
 *     summary: Delete a gig by ID
 *     tags:
 *       - Admin Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gigId:
 *                 type: string
 *                 description: ID of the gig to be deleted
 *     responses:
 *       200:
 *         description: Gig deleted successfully
 *       400:
 *         description: Bad request, gig ID is required
 *       404:
 *         description: Gig not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-delete-gig", adminController.deleteGig);

/**
 * @swagger
 * /api/admin-add-category:
 *   post:
 *     summary: Add a new category
 *     tags:
 *       - Admin Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               addCategory:
 *                 type: string
 *                 description: Name of the category to be added
 *               addCategoryImage:
 *                 type: string
 *                 description: URL of the image for the category
 *     responses:
 *       302:
 *         description: Redirect to the admin-categories page
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-add-category", adminController.addCategory);

/**
 * @swagger
 * /api/admin-add-subcategory:
 *   post:
 *     summary: Add a new subcategory to a category
 *     tags:
 *       - Admin Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               selectCategory:
 *                 type: string
 *                 description: Name of the category to add the subcategory to
 *               addSubCategory:
 *                 type: string
 *                 description: Name of the subcategory to be added
 *               addSubCategoryImage:
 *                 type: string
 *                 description: URL of the image for the subcategory
 *     responses:
 *       302:
 *         description: Redirect to the admin-categories page
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-add-subcategory", adminController.addSubCategory);

/**
 * @swagger
 * /api/admin-delete-category:
 *   post:
 *     summary: Delete a category
 *     tags:
 *       - Admin Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               selectedCategory:
 *                 type: string
 *                 description: Name of the category to be deleted
 *     responses:
 *       302:
 *         description: Redirect to the admin-categories page
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-delete-category", adminController.deleteCategory);

/**
 * @swagger
 * /api/admin-delete-subcategory:
 *   post:
 *     summary: Delete a subcategory from a category
 *     tags:
 *       - Admin Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               selectedCategory:
 *                 type: string
 *                 description: Name of the category containing the subcategory to be deleted
 *               deleteSubCategory:
 *                 type: string
 *                 description: Name of the subcategory to be deleted
 *     responses:
 *       302:
 *         description: Redirect to the admin-categories page
 *     security:
 *       - session_auth: []
 */
router.post("/api/admin-delete-subcategory", adminController.deleteSubCategory);
// router.post("/api/contact-admin", adminController.contactAdmin);
/**
 * @swagger
 * /api/sendMail:
 *   post:
 *     summary: Send an email
 *     description: This endpoint is used to send an email with the specified subject and message.
 *     tags:
 *       - Email
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       500:
 *         description: Internal server error
 */
router.post("/api/sendMail", adminController.postMail);

/**
 * @swagger
 * /api/admin-sendMail:
 *   get:
 *     summary: Render the admin email sending page
 *     description: This endpoint renders an HTML page where an admin can compose and send emails.
 *     tags:
 *       - Email
 *     responses:
 *       200:
 *         description: HTML page rendered successfully
 *       500:
 *         description: Internal server error
 *     security:
 *       - session_auth: []
 */
router.get("/api/admin-sendMail", adminController.getMailPage);

/**
 * @swagger
 * /api/search-categories:
 *   get:
 *     summary: Search categories by name
 *     description: This endpoint allows users to search for categories by name.
 *     tags:
 *       - Search
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: The search query to match category names.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categories:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: Internal server error
 */
router.get("/api/search-categories", ajaxController.searchCategories);

/**
 * @swagger
 * /api/search-users:
 *   get:
 *     summary: Search users by first name
 *     description: This endpoint allows users to search for other users by their first name.
 *     tags:
 *       - Search
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: The search query to match user first names.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */
router.get("/api/search-users", ajaxController.searchUsers);

module.exports = router;
