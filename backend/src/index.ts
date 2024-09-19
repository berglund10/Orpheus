import dotenv from "dotenv";
import Database from "./database";
import expressApp from "./express";

dotenv.config();

const db = new Database({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error('API_KEY is missing');
}

(async () => {
  try {
    await db.connect();

    //await db.addUser("test-username", "test-password");
  } catch (error) {
    console.error("Could not connect");
    console.error(error);
    process.exit(1);
  }
})();

const app = expressApp(db, apiKey);

app.listen(3000, () => {
  console.log(`Listen on port 3000`);
});
