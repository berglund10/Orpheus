import { Client, ClientConfig } from "pg";
import { v4 as uuidv4 } from "uuid";
import { checkHashedPassword, hashPassword } from "./password";

export default class Database {
  config: ClientConfig;
  connection: Client | null;

  constructor(config: ClientConfig) {
    this.config = config;
    this.connection = null;
  }

  async connect() {
    this.connection = new Client(this.config);
    await this.connection.connect();
    await this.createTables();
    console.log("Connected to database");
  }

  private getConnection() {
    if (this.connection === null) {
      throw new Error("Not connected to the database");
    }
    return this.connection;
  }

  private async createTables() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
          id varchar(255) NOT NULL,
          username varchar(255) NOT NULL, 
          password varchar(100) NOT NULL,
          createdAt TIMESTAMP NOT NULL,
          PRIMARY KEY (id)
      );
    `;
    await this.getConnection().query(query);
  }

  async addUser(username: string, password: string) {
    //Validation
    const id = uuidv4();
    const createdAt = new Date();

    const hashedPassword = hashPassword(password);

    console.log(checkHashedPassword(password, hashedPassword));

    const query =
      "INSERT INTO users(id, username, password, createdAt) VALUES ($1, $2, $3, $4)";
    await this.getConnection().query(query, [
      id,
      username,
      hashedPassword,
      createdAt,
    ]);

    return id;
  }

  async getUserById(id: string) {
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await this.getConnection().query(query, [id]);

    const user = result.rows[0];
    return user;
  }

  async getUsers() {
    const query = "SELECT * FROM users";
    const result = await this.getConnection().query(query);
    return result.rows;
  }

  async deleteUserById(id: string) {
    const query = "DELETE FROM users WHERE id = $1";
    await this.getConnection().query(query, [id]);

    return { message: `User with id ${id} deleted successfully.` };
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.end();
      console.log("Disconnected from database");
    }
  }
}
