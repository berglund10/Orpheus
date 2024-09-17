import dotenv from 'dotenv';
import Database from './database';
import expressApp from './express';

dotenv.config();

const db = new Database({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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

const app = expressApp();

app.listen(3000, () => {
  console.log(`Listen on port 3000`);
});

/* const saltLogger = function (req:any, res:any, next:any) {
  console.log(`salt> ${req.method} - ${req.url}`);
  next();
};

app.use(saltLogger); */

/* app.post('/add', async (req, res) => {
  const user = req.body;
  const databaseRes = await addUser(client, user);
  res.send(databaseRes);
}); */

/* app.get('/user', (_req, res) => {
  res.send({ username: 'userFromBackend', password: '321' });
});
 */
