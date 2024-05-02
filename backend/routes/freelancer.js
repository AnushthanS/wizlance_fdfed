const express = require("express");
const FreelancerController = require("../controllers/freelancer");

const router = express.Router();

/**
 * @swagger
 * /api/addGigs:
 *   post:
 *     summary: Add a new gig as a freelancer
 *     description: Add a new gig to the system
 *     tags:
 *       - Gig
 *     security:
 *       - session_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the freelancer adding the gig
 *               gig:
 *                 type: string
 *                 description: Name of the gig
 *               category:
 *                 type: string
 *                 description: Name of the category
 *               subCategory:
 *                 type: string
 *                 description: Name of the subcategory
 *               description:
 *                 type: string
 *                 description: Description of the gig
 *               price:
 *                 type: number
 *                 description: Price of the gig
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file of the gig
 *     responses:
 *       200:
 *         description: Gig added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User or subcategory not found
 *       500:
 *         description: Internal server error
 */
router.post("/api/addGigs", FreelancerController.addGigs);

/**
 * @swagger
 * /api/addSkill:
 *   post:
 *     summary: Add a new skill as a freelancer
 *     description: Add a new skill to the freelancer's profile
 *     tags:
 *       - Skill
 *     security:
 *       - session_auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the freelancer adding the skill
 *               skill:
 *                 type: string
 *                 description: Name of the skill
 *     responses:
 *       200:
 *         description: Skill added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

router.post("/api/addSkill", FreelancerController.addSkill);

/**
 * @swagger
 * /api/getSkills:
 *   get:
 *     summary: Get all skills of a freelancer
 *     description: Get all skills of a freelancer's profile
 *     tags:
 *       - Skill
 *     security:
 *       - session_auth: []
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Email of the freelancer
 *     responses:
 *       200:
 *         description: Skills retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/api/getSkills", FreelancerController.getSkills);
/**
 * @swagger
 * /api/becomeFreelancer:
 *   post:
 *     summary: Become a freelancer
 *     description: Update user role to freelancer
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
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user becoming a freelancer
 *     responses:
 *       200:
 *         description: User role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

router.post("/api/becomeFreelancer", FreelancerController.becomeFreelancer);

module.exports = router;
