const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");
const cacheData = require("../middleware/redisCacheData");
const router = express.Router();

//api

/**
 * @swagger
 * /api/subcategory:
 *   post:
 *     summary: Get subcategory by ID
 *     description: Retrieve a subcategory by its ID
 *     tags:
 *       - Subcategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subCategoryId:
 *                 type: string
 *                 description: ID of the subcategory to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 subCategory:
 *                   $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: Subcategory not found
 *       500:
 *         description: Internal server error
 */
router.post("/api/subcategory", cacheData, shopController.getSubCategory);


/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Get category by ID
 *     description: Retrieve a category by its ID
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *                 description: ID of the category to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category:
 *                   $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
router.post("/api/category",  shopController.getCategoryImg);


/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve all categories from the database
 *     tags:
 *       - Category
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
router.get("/api/categories", cacheData, shopController.getCategories);


/**
 * @swagger
 * /api/subcategories:
 *   post:
 *     summary: Get subcategories by category ID
 *     description: Retrieve subcategories belonging to a specific category
 *     tags:
 *       - Subcategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               categoryId:
 *                 type: string
 *                 description: ID of the category to retrieve subcategories for
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 subCategories:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: No subcategories found for the given category ID
 *       500:
 *         description: Internal server error
 */
router.post("/api/subcategories", shopController.getSubCategories);


/**
 * @swagger
 * /api/gigs:
 *   post:
 *     summary: Get gigs by subcategory ID
 *     description: Retrieve gigs belonging to a specific subcategory
 *     tags:
 *       - Gig
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subCategoryId:
 *                 type: string
 *                 description: ID of the subcategory to retrieve gigs for
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
 *                   items:
 *                     $ref: '#/components/schemas/Gig'
 *       404:
 *         description: No gigs found for the given subcategory ID
 *       500:
 *         description: Internal server error
 */
router.post("/api/gigs", shopController.getGigs);


/**
 * @swagger
 * /api/gig/details:
 *   post:
 *     summary: Get gig details by ID
 *     description: Retrieve details of a gig by its ID
 *     tags:
 *       - Gig
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gigId:
 *                 type: string
 *                 description: ID of the gig to retrieve details for
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 gig:
 *                   $ref: '#/components/schemas/Gig'
 *       404:
 *         description: No gig found for the given ID
 *       500:
 *         description: Internal server error
 */
router.post("/api/gig/details", shopController.getGigDetails);


/**
 * @swagger
 * /api/placeOrder:
 *   post:
 *     summary: Place an order
 *     description: Create a new order for a gig
 *     tags:
 *       - Order
 *     security:
 *       - session_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gigId:
 *                 type: string
 *                 description: ID of the gig to place an order for
 *               freelancerId:
 *                 type: string
 *                 description: ID of the freelancer for the gig
 *               details:
 *                 type: string
 *                 description: Additional details about the order
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 orderId:
 *                   type: string
 *       500:
 *         description: Internal server error
 */
router.post("/api/placeOrder", isAuth, shopController.placeOrder);

/**
 * @swagger
 * /api/pay:
 *   post:
 *     summary: Pay for an order
 *     description: Mark an order as paid
 *     tags:
 *       - Order
 *     security:
 *       - session_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 description: ID of the order to mark as paid
 *     responses:
 *       200:
 *         description: Order paid successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: No order found for the given ID
 *       500:
 *         description: Internal server error
 */
router.post("/api/pay", isAuth, shopController.postPay);


// Cache Details
router.get("/api/clearCache", shopController.clearCache);
router.get("/api/cache", shopController.getCacheData);

module.exports = router;
