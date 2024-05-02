const express = require("express");

const dashboardController = require("../controllers/dashboard");
const otherFuncController = require("../controllers/otherFunc");
const isAuth = require("../middleware/is-auth");

const router = express.Router();


/**
 * @swagger
 * /api/getOrders:
 *   post:
 *     summary: Get orders
 *     description: Retrieve orders based on the authenticated user's role
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
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Order'
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post("/api/getOrders", isAuth, dashboardController.getOrders);

/**
 * @swagger
 * /api/getProjects:
 *   post:
 *     summary: Get projects
 *     description: Retrieve projects associated with the authenticated freelancer
 *     tags:
 *       - Project
 *     security:
 *       - session_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 projects:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Gig'
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post("/api/getProjects", isAuth, dashboardController.getProjects);

/**
 * @swagger
 * /api/getFreelancerStats:
 *   post:
 *     summary: Get freelancer statistics
 *     description: Retrieve statistics for the authenticated freelancer
 *     tags:
 *       - Freelancer
 *     security:
 *       - session_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalOrders:
 *                   type: integer
 *                   description: Total number of orders
 *                 totalProjects:
 *                   type: integer
 *                   description: Total number of projects
 *                 earnings:
 *                   type: number
 *                   description: Total earnings from orders
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post(
  "/api/getFreelancerStats",
  isAuth,
  dashboardController.getFreelancerDashboardDetails
);

/**
 * @swagger
 * /api/search:
 *   post:
 *     summary: Search for categories
 *     description: Search for categories based on a query string and redirect to the main page of the matching category
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: Query string for searching categories
 *     responses:
 *       302:
 *         description: Redirect to the main page of the matching category
 *       500:
 *         description: Internal server error
 */
router.post("/api/search", otherFuncController.postSearchCategories);

/**
 * @swagger
 * /api/{category}/search-gig:
 *   post:
 *     summary: Search for gigs in a specific category
 *     description: Search for gigs in a specific category based on a query string and redirect to the main page or subcategory page of the matching category
 *     tags:
 *       - Gig
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Category name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: Query string for searching gigs
 *     responses:
 *       302:
 *         description: Redirect to the main page or subcategory page of the matching category
 *       500:
 *         description: Internal server error
 */
router.post(
  "/api/:category/search-gig",
  otherFuncController.postSearchSubCategories
);

/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get contact form
 *     description: Render a contact form page for users to contact the platform
 *     tags:
 *       - Contact
 *     responses:
 *       200:
 *         description: Contact form page rendered successfully
 */
router.get("/api/contact", otherFuncController.getContactForm);

module.exports = router;
