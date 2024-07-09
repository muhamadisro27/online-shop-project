import supertest from "supertest";
import { web } from "../src/app/web";

describe("GET /api/products", () => {
  it("should return a list of products", async () => {
    const result = await supertest(web).get("/api/products");

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
  });
});
