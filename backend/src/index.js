const express = require('express');
const path = require('path');
const cors = require('cors')
const compression = require('compression');
const { connectDB, client, addUser } = require('./database');

const frontendDistPath = path.join(__dirname, '..', '..', 'frontend', 'dist');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(compression());
app.use(express.json());

(async function start() {
    const res = await connectDB(client);
    console.log(res);
  })();

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})

app.post("/add", async (req, res) => {
    const user = req.body;
    const databaseRes = await addUser(client, user);
    res.send(databaseRes);
})

app.get("/user", (req, res) => {
    res.send({ username: "userFromBackend", password: "321" });
})

app.use("/", express.static(frontendDistPath));

app.get("*", (req, res) => {
    res.sendFile('index.html', { root: frontendDistPath });
});
