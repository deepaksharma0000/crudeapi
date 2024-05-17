const { knex } = require("knex");

const Knex = knex({
  client: "pg",
  connection: {
    user:"postgres",
    host:"localhost",
    password:"root",
    port:5432,
    database: "crude",
  },
});

module.exports = Knex;
