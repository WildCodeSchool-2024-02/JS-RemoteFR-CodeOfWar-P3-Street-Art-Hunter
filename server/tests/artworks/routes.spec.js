// Import required dependencies
const { app, request } = require("../config");

describe("GET /api/artworks", () => {
  it("should fetch artworks successfully", async () => {
    const response = await request(app).get("/api/artworks");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/artwork/:id", () => {
  it("Sould be fetch artwork by id", async () => {
    const response = await request(app).get("/api/artworks/1");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("image_url");
    expect(response.body).toHaveProperty("lat");
    expect(response.body).toHaveProperty("lon");
    expect(response.body).toHaveProperty("city");
    expect(response.body).toHaveProperty("style");
    expect(response.body).toHaveProperty("pseudo");
  });
});

describe("GET /api/artwork/:id", () => {
  it("Sould return 404", async () => {
    const response = await request(app).get("/api/artworks/zef1");

    expect(response.status).toBe(404);
  });
});

// describe(" /api/artwork/:id", () => {
//   it("Artwork should be destroy , status=204", async () => {
//     const response = await request(app).delete("/api/artworks/1");

//     expect(response.status).toBe(204);
//   });
// });
