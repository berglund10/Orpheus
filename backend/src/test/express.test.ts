import request from "supertest";
import app from "../index";
import { deepEqual } from "node:assert/strict";
import test from "node:test";
import dotenv from "dotenv";

dotenv.config();

test("GET /api/goalkeepers should return status 200", async (t) => {
  const res = await request(app).get("/api/goalkeepers");

  deepEqual(res.status, 200);
});

test("GET /api/goalkeepers should return array", async () => {
  const res = await request(app).get("/api/goalkeepers");
  const goalkeepersArray = res.body;
  deepEqual(Array.isArray(goalkeepersArray), true);
});

test("GET /api/goalkeepers first should be named M. Perin", async () => {
  const res = await request(app).get("/api/goalkeepers");
  const firstGoalKepper = res.body[0];
  deepEqual(firstGoalKepper.name, "M. Perin");
});

test("GET /users should return status 200", async () => {
  const res = await request(app).get("/users");
  deepEqual(res.status, 200);
});

/* test("GET /users, the length should be same as users in database(4)", async () => {
  const res = await request(app).get("/users");
  const users = res.body;
  deepEqual(users.length, 4);
}); */

test("POST /login with a username that dosen't exist should return status 404", async () => {
  const data = {
    username: "username"
  }
  const res = await request(app).post("/login").send(data);
  deepEqual(res.status, 404);

})

test("POST /login with correct username but wrong password should return status 401", async () => {
  const data = {
    username: "lacan",
    password: "thisIsWrong"
  }
  const res = await request(app).post("/login").send(data);
  deepEqual(res.status, 401)
})

test("POST /login with correct username and password should return status 200", async () => {
  const data = {
    username: "lacan",
    password: process.env.TEST_PASSWORD
  }
  const res = await request(app).post("/login").send(data);
  deepEqual(res.status, 200);
})

test("POST /login with correct username and password should return correct tokenText", async () => {
  const data = {
    username: "lacan",
    password: process.env.TEST_PASSWORD
  }
  const tokenText = "Här är ditt token";

  const res = await request(app).post("/login").send(data);
  deepEqual(res.body.token, tokenText);
})
