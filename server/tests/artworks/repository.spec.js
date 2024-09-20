const { tables } = require("../config");

describe("readAll -> artwork", () => {
  it("Sould can read all artwork", async () => {
    const response = await tables.artwork.readAll(1);

    expect(response.length).toBeGreaterThan(0);
  });
});

describe("read -> artwork", () => {
  it("Should can read by id", async () => {
    const response = await tables.artwork.read(1);

    expect(response).toHaveProperty("title");
    expect(response).toHaveProperty("lat");
    expect(response).toHaveProperty("lon");
    expect(response).toHaveProperty("image_url");
    expect(response.id).toBe(1);
  });
});
