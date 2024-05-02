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
        console.log(res.body);
        expect(res.body.users.length).toBeGreaterThan(0);
    });
});