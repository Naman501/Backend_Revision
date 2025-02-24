const request = require('supertest');
const app = require('../index');


describe('GET /', () => {
    it('responds with "Hello, World!"', (ho_gaya) => {
        request(app).get('/').expect(200,'Hello, World!', ho_gaya);
    });
});



describe("POST /user", () => {
    it("should create a user with valid test", (done) => {
      request(app)
        .post("/user")
        .send({ name: "NAMAN" })
        .expect(201, "User NAMAN created", done);
    });


it("should return 400 if name is missing", (done) => {
    request(app).post("/user").send({}).expect(400, "Name is required", done);
  });
});