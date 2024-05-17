const { Pool } = require("pg");

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    password:"root",
    port:5432,
  database: "crude",
});

pool.connect();

pool.on("connect", () => {
  console.log("DB connection...!!!");
});
pool.on("end", () => {
  console.log("DB end connection...!!!");
});
pool.query("SET search_path to 'public';");
module.exports = pool;
