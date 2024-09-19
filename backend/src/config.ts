import dotenv from 'dotenv';

dotenv.config();

const requiredVars = ['API_KEY', 'DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
});

export const config = {
  apiKey: process.env.API_KEY as string,
  databaseConfig: {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
  },
};
