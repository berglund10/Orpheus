const express = require('express');
const path = require('path');
const cors = require('cors')
const compression = require('compression')

const frontendDistPath = path.join(__dirname, '..', '..', 'frontend', 'dist');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(compression());

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})

app.use("/", express.static(frontendDistPath));

app.get("*", (req, res) => {
    res.sendFile('index.html', { root: frontendDistPath } );
});