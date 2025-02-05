/*

Copyright (c) 2019 - present AppSeed.us

*/

const request = require('supertest')
const app = require('../src/server')

describe("API tests", () => {

  // The most basic test
  test("API should return a 200 status", done => {

    request(app)
      .get("/api/users/testme")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        done();
      });
      
  });

});

