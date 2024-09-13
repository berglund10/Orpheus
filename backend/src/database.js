const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 3030,
    database: 'postgres'
});

async function connectDB(client) {
    try {
        await client.connect();
        return "Connected to database";
    } catch (error) {
        console.log(error.stack);
    }
}

async function addUser(client, user) {
    const { username, password } = user;
    
    const query = 'INSERT INTO users(username, password) VALUES ($1, $2)';
    try {
        await client.query(query, [username, password]);
        return "User added to the database";
    } catch (error) {
        console.log(error);
        return "Error Error";
    }
}

const query = `
    CREATE TABLE users(
      id serial PRIMARY KEY,
      username VARCHAR(255),
      password VARCHAR(255)
    );
  `;

function createTable() {
    client.query(query, (err, result) => {
        if (err) {
            console.error('Error creating table', err);
        } else {
            console.log('Table created successfully');
        }

        client.end();
    });
}

module.exports = {
    connectDB,
    client,
    addUser
};