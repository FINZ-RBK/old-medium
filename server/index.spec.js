const app = require('./indexTestingServer');
const supertest = require('supertest');
app.listen(7000);

describe("testing proxy server get requests to the database", () => {
    it('get the navbar from the database', async (done) => {
        const response = await supertest(app).get("/navbar");
        expect(response.status).toBe(200);
        done();
    });

});

