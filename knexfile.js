import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.YHANGRY_DB_HOST,
    database: process.env.YHANGRY_DB_NAME,
    user: process.env.YHANGRY_DB_USER,
    password: process.env.YHANGRY_DB_PASSWORD,
    charset: "utf8",
  },
};
