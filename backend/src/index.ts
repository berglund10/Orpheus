import Database from "./database";
import expressApp from "./express";
import { config } from "./config";

const db = new Database({
  host: config.databaseConfig.host,
  port: config.databaseConfig.port,
  user: config.databaseConfig.user,
  password: config.databaseConfig.password,
  database: config.databaseConfig.database,
});

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

const app = expressApp(db, config.apiKey);

app.listen(3000, () => {
  console.log(`Listen on port 3000`);
});
