const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

require('dotenv').config();


beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
    await mongoose.disconnect();
});

describe("GET /api/admin-users", () => {
    it('should return all the registered users', async() => {
        const res = await request(app).get('/api/admin-users');
        expect(res.statusCode).toBe(200);
        expect(res.body.users.length).toBeGreaterThan(0);
    });
});

describe("GET /api/admin-categories", () => {
    it('should return all the categories', async() => {
        const res = await request(app).get('/api/admin-categories');
        expect(res.statusCode).toBe(200);
        expect(res.body.categories.length).toBeGreaterThan(0);
    });
});

describe("GET /api/admin-subcategories", () => {
    it('should return all admin subcategories', async() => {
        const res = await request(app).get('/api/admin-subcategories');
        expect(res.statusCode).toBe(200);
        expect(res.body.subcategories.length).toBeGreaterThan(0);
    });
});

describe("POST /api/admin-gigs", () => {
    it('should display admin gigs', async() => {
        const res = await request(app).post('/api/admin-gigs').send({ type: "default" });
        expect(res.statusCode).toBe(200);
        expect(res.body.gigs.length).toBeGreaterThan(0);
    });
});

describe("GET /api/all-gigs", () => {
    it('should return all gigs', async() => {
        const res = await request(app).get('/api/all-gigs');
        expect(res.statusCode).toBe(200);
        expect(res.body.gigs.length).toBeGreaterThan(0);
    });
});

describe("POST /api/admin-delete", () => {
    it('should delete user and associated data', async() => {
        const res = await request(app)
            .post('/api/admin-delete')
            .send({ deleteFromEmail: "example@example.com" });
        expect(res.statusCode).toBe(200);
    });
});

describe("POST /api/admin-delete-gig", () => {
    it('should delete a gig by ID', async() => {
        const res = await request(app)
            .post('/api/admin-delete-gig')
            .send({ gigId: "exampleGigId" });
        expect(res.statusCode).toBe(200);
    });
});

describe("POST /api/admin-add-category", () => {
    it('should add a new category', async() => {
        const res = await request(app)
            .post('/api/admin-add-category')
            .send({ addCategory: "New Category", addCategoryImage: "https://example.com/image.jpg" });
        expect(res.statusCode).toBe(302);
    });
});

describe("POST /api/admin-add-subcategory", () => {
    it('should add a new subcategory to a category', async() => {
        const res = await request(app)
            .post('/api/admin-add-subcategory')
            .send({ selectCategory: "New Category", addSubCategory: "New Subcategory", addSubCategoryImage: "https://example.com/image.jpg" });
        expect(res.statusCode).toBe(302);
    });
});

describe("POST /api/admin-delete-subcategory", () => {
    it('should delete a subcategory from a category', async() => {
        const res = await request(app)
            .post('/api/admin-delete-subcategory')
            .send({ selectedCategory: "New Category", deleteSubCategory: "New Subcategory" });
        expect(res.statusCode).toBe(302);
    });
});

describe("POST /api/admin-delete-category", () => {
    it('should delete a category', async() => {
        const res = await request(app)
            .post('/api/admin-delete-category')
            .send({ selectedCategory: "New Category" });
        expect(res.statusCode).toBe(302);
    });
});

describe("POST /api/sendMail", () => {
    it('should send an email', async() => {
        const res = await request(app)
            .post('/api/sendMail')
            .send({ mailSubject: "Test Subject", mailMessage: "Test Message" });
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /api/admin-sendMail", () => {
    it('should render the admin email sending page', async() => {
        const res = await request(app).get('/api/admin-sendMail');
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /api/search-categories", () => {
    it('should search categories by name', async() => {
        const res = await request(app).get('/api/search-categories?query=example');
        expect(res.statusCode).toBe(200);
        expect(res.body.categories.length).toBeGreaterThan(0);
    });
});

describe("GET /api/search-users", () => {
    it('should search users by first name', async() => {
        const res = await request(app).get('/api/search-users?query=Nikunj');
        expect(res.statusCode).toBe(200);
        expect(res.body.users.length).toBeGreaterThan(0);
    });
});