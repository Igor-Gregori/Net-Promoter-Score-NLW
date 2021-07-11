import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
  let idUserTest = null;

  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    const { id } = response.body;
    idUserTest = id;

    expect(response.status).toBe(201);
  });

  it("Should be not to create a user with exist email", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(400);
  });

  it("Should be update a user", async () => {
    const response = await request(app).put("/users").send({
      id: idUserTest,
      email: "user@example.com",
      name: "User Example Updated",
    });

    expect(response.status).toBe(201);
  })
});
